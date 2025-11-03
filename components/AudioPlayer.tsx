import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { GeneratedAudio } from '../types.ts';
import { PlayIcon, PauseIcon, DownloadIcon, TrashIcon, WaveformIcon } from './icons.tsx';

interface AudioPlayerProps {
  audio: GeneratedAudio;
  deleteAudio: (id: number) => void;
}

// Audio decoding utilities (as per Gemini docs)
function decode(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}


export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audio, deleteAudio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    // Ensure AudioContext is created only once and is browser-friendly
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    }
    
    const setupAudio = async () => {
      try {
        const decodedBytes = decode(audio.audioData);
        const buffer = await decodeAudioData(decodedBytes, audioContextRef.current!, 24000, 1);
        setAudioBuffer(buffer);
      } catch (error) {
        console.error('Failed to decode audio data:', error);
      }
    };
    setupAudio();
    // No cleanup needed for audio context here, it persists for the app lifetime
  }, [audio.audioData]);

  const togglePlayPause = useCallback(() => {
    if (!audioBuffer || !audioContextRef.current) return;

    if (isPlaying) {
      sourceRef.current?.stop();
      setIsPlaying(false);
    } else {
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      source.onended = () => {
        setIsPlaying(false);
      };
      source.start();
      sourceRef.current = source;
      setIsPlaying(true);
    }
  }, [isPlaying, audioBuffer]);

  const handleDownload = () => {
      const link = document.createElement('a');
      const byteCharacters = atob(audio.audioData);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'audio/webm' });
      link.href = URL.createObjectURL(blob);
      const safeText = audio.text.substring(0, 20).replace(/[^a-z0-9]/gi, '_').toLowerCase();
      link.download = `voice-gen-7-${safeText}.webm`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-800/70 border border-gray-700 rounded-lg p-3 flex items-center justify-between gap-3 transition-all duration-300 hover:border-purple-500/50 hover:bg-gray-800">
      <button
        onClick={togglePlayPause}
        disabled={!audioBuffer}
        className="flex-shrink-0 w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center text-white disabled:bg-gray-600 transition-colors"
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
      <div className="flex-grow overflow-hidden">
        <p className="text-sm text-gray-200 truncate" title={audio.text}>{audio.text}</p>
        <div className={`w-full h-8 flex items-center gap-1 ${isPlaying ? '[&>div]:animate-pulse' : ''}`}>
           <WaveformIcon className={`h-full w-auto ${isPlaying ? 'text-purple-400' : 'text-gray-600'}`} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={handleDownload} className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-900/50 rounded-full transition-colors"><DownloadIcon /></button>
        <button onClick={() => deleteAudio(audio.id)} className="p-2 text-red-500 hover:text-red-400 hover:bg-red-900/50 rounded-full transition-colors"><TrashIcon /></button>
      </div>
    </div>
  );
};