
import React, { useState, useCallback } from 'react';
import { TextInputArea } from './components/TextInputArea.tsx';
import { SettingsPanel } from './components/SettingsPanel.tsx';
import { ResultsPanel } from './components/ResultsPanel.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import type { VoiceSettings, GeneratedAudio, Preset } from './types.ts';
import { generateSpeech } from './services/geminiService.ts';
import { PRESETS } from './constants.ts';

const App: React.FC = () => {
  const [textInput, setTextInput] = useState<string>('Hello! Welcome to Voice Gen 8.3. Experience the future of text-to-speech.');
  const [isBulkMode, setIsBulkMode] = useState<boolean>(false);
  const [settings, setSettings] = useState<VoiceSettings>({
    voice: 'Zephyr',
    promptPrefix: 'Say clearly:',
    backgroundMusic: false,
    reverb: false,
  });
  const [generatedAudios, setGeneratedAudios] = useState<GeneratedAudio[]>([]);
  const [isLoading, setIsLoading] = useState<false | number | 'all'>(false); // false, index for bulk, or 'all' for single

  const handleGenerate = useCallback(async () => {
    if (!textInput.trim()) return;

    // NOTE: backgroundMusic and reverb settings are not yet used in generation
    // as they require client-side audio processing.

    if (isBulkMode) {
      const lines = textInput.split('\n').filter(line => line.trim() !== '');
      for (let i = 0; i < lines.length; i++) {
        setIsLoading(i);
        try {
          const fullPrompt = `${settings.promptPrefix} ${lines[i]}`;
          const audioData = await generateSpeech(fullPrompt, settings.voice);
          const newAudio: GeneratedAudio = {
            id: Date.now() + i,
            text: lines[i],
            audioData: audioData,
            voice: settings.voice,
          };
          setGeneratedAudios(prev => [newAudio, ...prev]);
        } catch (error) {
          console.error(`Error generating audio for line ${i + 1}:`, error);
          alert(`Failed to generate audio for line: "${lines[i]}". Check the console for details.`);
        }
      }
    } else {
      setIsLoading('all');
      try {
        const fullPrompt = `${settings.promptPrefix} ${textInput}`;
        const audioData = await generateSpeech(fullPrompt, settings.voice);
        const newAudio: GeneratedAudio = {
          id: Date.now(),
          text: textInput,
          audioData: audioData,
          voice: settings.voice,
        };
        setGeneratedAudios(prev => [newAudio, ...prev]);
      } catch (error) {
        console.error('Error generating audio:', error);
        alert('Failed to generate audio. Please check your API key and network connection.');
      }
    }
    setIsLoading(false);
  }, [textInput, isBulkMode, settings]);

  const applyPreset = useCallback((preset: Preset) => {
    setSettings(prev => ({ 
      ...prev, 
      voice: preset.voice, 
      promptPrefix: preset.promptPrefix 
    }));
    setTextInput(preset.exampleText);
  }, []);

  const deleteAudio = useCallback((id: number) => {
    setGeneratedAudios(prev => prev.filter(audio => audio.id !== id));
  }, []);
  
  const clearAllAudios = useCallback(() => {
    setGeneratedAudios([]);
  }, []);


  return (
    <div className="min-h-screen bg-black flex flex-col p-4 sm:p-6 lg:p-8">
      <Header />
      <main className="flex-grow container mx-auto grid grid-cols-1 lg:grid-cols-10 gap-6 mt-6">
        <div className="lg:col-span-3">
          <TextInputArea
            textInput={textInput}
            setTextInput={setTextInput}
            isBulkMode={isBulkMode}
            setIsBulkMode={setIsBulkMode}
            onGenerate={handleGenerate}
            isLoading={isLoading !== false}
          />
        </div>
        <div className="lg:col-span-3">
          <SettingsPanel
            settings={settings}
            setSettings={setSettings}
            presets={PRESETS}
            applyPreset={applyPreset}
          />
        </div>
        <div className="lg:col-span-4">
          <ResultsPanel
            audios={generatedAudios}
            deleteAudio={deleteAudio}
            clearAllAudios={clearAllAudios}
            isLoading={isLoading}
            bulkTotal={isBulkMode ? textInput.split('\n').filter(line => line.trim() !== '').length : 0}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;