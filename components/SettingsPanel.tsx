
import React from 'react';
import type { VoiceSettings, Preset } from '../types.ts';
import { VOICES } from '../constants.ts';
import { CloneIcon, MusicIcon, ReverbIcon } from './icons.tsx';

interface SettingsPanelProps {
  settings: VoiceSettings;
  setSettings: React.Dispatch<React.SetStateAction<VoiceSettings>>;
  presets: Preset[];
  applyPreset: (preset: Preset) => void;
}

const CustomSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
  <select {...props} className={`w-full bg-gray-800/60 border border-gray-700 rounded-md p-2.5 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${props.className || ''}`}>
    {props.children}
  </select>
);

const LabeledControl: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-blue-300 mb-1">{label}</label>
    {children}
  </div>
);


export const SettingsPanel: React.FC<SettingsPanelProps> = ({ settings, setSettings, presets, applyPreset }) => {
  const handleCloneClick = () => {
    alert('Voice cloning is an advanced feature that requires a backend and is coming soon!');
  };

  const handleToggle = (key: 'backgroundMusic' | 'reverb') => {
    setSettings(prev => ({...prev, [key]: !prev[key]}));
  };
  
  return (
    <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-4 h-full flex flex-col neon-border-blue">
      <h2 className="text-xl font-orbitron text-blue-300 mb-4">Voice Settings</h2>
      
      <LabeledControl label="Voice & Character">
        <CustomSelect
          value={settings.voice}
          onChange={(e) => setSettings(prev => ({ ...prev, voice: e.target.value as VoiceSettings['voice'] }))}
        >
          {VOICES.map(voice => (
            <option key={voice.id + voice.name} value={voice.id}>{voice.name} ({voice.lang})</option>
          ))}
        </CustomSelect>
      </LabeledControl>

      <LabeledControl label="Emotional Tone / Style Prefix">
        <input
          type="text"
          className="w-full bg-gray-800/60 border border-gray-700 rounded-md p-2 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
          placeholder="e.g., 'Say cheerfully:'"
          value={settings.promptPrefix}
          onChange={(e) => setSettings(prev => ({ ...prev, promptPrefix: e.target.value }))}
        />
      </LabeledControl>
      
      <div className="my-4 border-t border-blue-500/30"></div>

      <h3 className="text-lg font-orbitron text-blue-300 mb-3">Voice Presets</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        {presets.map(preset => (
          <button
            key={preset.name}
            onClick={() => applyPreset(preset)}
            className="text-sm bg-gray-800 hover:bg-blue-800/50 border border-gray-700 hover:border-blue-500 text-blue-200 font-semibold py-2 px-2 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {preset.name}
          </button>
        ))}
      </div>

      <div className="my-4 border-t border-blue-500/30"></div>
      
      <h3 className="text-lg font-orbitron text-blue-300 mb-3">Advanced Controls</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
          <div className="flex items-center gap-2">
            <CloneIcon />
            <span>Voice Cloning</span>
          </div>
          <button 
            onClick={handleCloneClick}
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded-md transition-colors"
          >
            Upload
          </button>
        </div>
         <label htmlFor="music-toggle" className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700 cursor-pointer transition-colors hover:border-blue-500/50">
          <div className="flex items-center gap-2">
            <MusicIcon />
            <span>Background Music</span>
          </div>
          <div className="relative">
            <input type="checkbox" id="music-toggle" className="sr-only" checked={settings.backgroundMusic} onChange={() => handleToggle('backgroundMusic')} />
            <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
            <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${settings.backgroundMusic ? 'transform translate-x-4 bg-blue-400' : ''}`}></div>
          </div>
        </label>
         <label htmlFor="reverb-toggle" className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700 cursor-pointer transition-colors hover:border-blue-500/50">
          <div className="flex items-center gap-2">
            <ReverbIcon />
            <span>Reverb / Echo</span>
          </div>
          <div className="relative">
            <input type="checkbox" id="reverb-toggle" className="sr-only" checked={settings.reverb} onChange={() => handleToggle('reverb')} />
            <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
            <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${settings.reverb ? 'transform translate-x-4 bg-blue-400' : ''}`}></div>
          </div>
        </label>
      </div>
       <p className="text-xs text-gray-500 mt-3 text-center">Note: Advanced controls are for demonstration and do not yet affect the generated audio.</p>
    </div>
  );
};