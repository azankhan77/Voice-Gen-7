
import React from 'react';
import { GenerateIcon } from './icons.tsx';

interface TextInputAreaProps {
  textInput: string;
  setTextInput: (text: string) => void;
  isBulkMode: boolean;
  setIsBulkMode: (isBulk: boolean) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

export const TextInputArea: React.FC<TextInputAreaProps> = ({
  textInput,
  setTextInput,
  isBulkMode,
  setIsBulkMode,
  onGenerate,
  isLoading,
}) => {
  return (
    <div className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-4 h-full flex flex-col neon-border-purple">
      <h2 className="text-xl font-orbitron text-purple-300 mb-4">Input Text</h2>
      <textarea
        className="w-full flex-grow bg-gray-800/60 border border-gray-700 rounded-md p-3 text-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 resize-none"
        placeholder="Type or paste your text here..."
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        rows={15}
      />
      <div className="flex items-center justify-between mt-4">
        <label htmlFor="bulk-toggle" className="flex items-center cursor-pointer">
          <span className="mr-3 text-sm font-medium text-gray-300">Bulk Convert</span>
          <div className="relative">
            <input type="checkbox" id="bulk-toggle" className="sr-only" checked={isBulkMode} onChange={() => setIsBulkMode(!isBulkMode)} />
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${isBulkMode ? 'transform translate-x-6 bg-purple-400' : ''}`}></div>
          </div>
        </label>
        <button
          onClick={onGenerate}
          disabled={isLoading || !textInput.trim()}
          className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-900 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 shadow-lg shadow-purple-900/50"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-dashed rounded-full animate-spin border-white"></div>
              Generating...
            </>
          ) : (
            <>
              <GenerateIcon />
              Generate
            </>
          )}
        </button>
      </div>
       {isBulkMode && <p className="text-xs text-blue-400 mt-2">Each line will be converted into a separate audio file.</p>}
    </div>
  );
};