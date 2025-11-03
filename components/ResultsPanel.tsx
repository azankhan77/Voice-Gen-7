import React from 'react';
import type { GeneratedAudio } from '../types.ts';
import { AudioPlayer } from './AudioPlayer.tsx';
import { DownloadIcon, TrashIcon } from './icons.tsx';

interface ResultsPanelProps {
  audios: GeneratedAudio[];
  deleteAudio: (id: number) => void;
  clearAllAudios: () => void;
  isLoading: false | number | 'all';
  bulkTotal: number;
}

export const ResultsPanel: React.FC<ResultsPanelProps> = ({ audios, deleteAudio, clearAllAudios, isLoading, bulkTotal }) => {
  
  const handleDownloadAll = () => {
    audios.forEach((audio, index) => {
      const link = document.createElement('a');
      const byteCharacters = atob(audio.audioData);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'audio/webm' }); // Note: API returns raw pcm, but browsers handle webm better for download naming
      link.href = URL.createObjectURL(blob);
      const safeText = audio.text.substring(0, 20).replace(/[^a-z0-9]/gi, '_').toLowerCase();
      link.download = `voice-gen-7-${safeText}.webm`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-4 h-full flex flex-col neon-border-purple">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-orbitron text-purple-300">Generated Audio</h2>
        {audios.length > 0 && (
          <div className="flex gap-2">
             <button onClick={handleDownloadAll} className="flex items-center gap-1 text-xs bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded-md transition-colors duration-300">
              <DownloadIcon className="w-4 h-4" /> All
            </button>
            <button onClick={clearAllAudios} className="flex items-center gap-1 text-xs bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-md transition-colors duration-300">
              <TrashIcon className="w-4 h-4" /> Clear
            </button>
          </div>
        )}
      </div>
      <div className="flex-grow overflow-y-auto pr-2 space-y-3">
        {isLoading && typeof isLoading === 'number' && (
           <div className="text-center p-4 bg-gray-800/50 rounded-lg">
             <p className="text-blue-300 animate-pulse">Generating audio {isLoading + 1} of {bulkTotal}...</p>
             <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
               <div className="bg-blue-500 h-2.5 rounded-full" style={{width: `${((isLoading + 1)/bulkTotal) * 100}%`}}></div>
             </div>
           </div>
        )}
         {isLoading === 'all' && (
           <div className="text-center p-4 bg-gray-800/50 rounded-lg">
             <p className="text-purple-300 animate-pulse">Generating audio...</p>
           </div>
        )}
        {audios.length === 0 && !isLoading && (
          <div className="text-center py-10 text-gray-500">
            <p>Your generated audio files will appear here.</p>
          </div>
        )}
        {audios.map(audio => (
          <AudioPlayer key={audio.id} audio={audio} deleteAudio={deleteAudio} />
        ))}
      </div>
    </div>
  );
};