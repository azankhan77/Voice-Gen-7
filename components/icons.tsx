
import React from 'react';

export const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-6 h-6 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
);

export const PauseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-6 h-6 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z"></path></svg>
);

export const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
);

export const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
);

export const GenerateIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-5 h-5 ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a2.25 2.25 0 01-1.476-1.476L12 18.75l1.938-.648a2.25 2.25 0 011.476-1.476L17.25 15l.648 1.938a2.25 2.25 0 011.476 1.476L21 18.75l-1.938.648a2.25 2.25 0 01-1.476 1.476z" />
  </svg>
);

export const CloneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-5 h-5 ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.022 12.022 0 01-11.68 0 12.022 12.022 0 0111.68 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.37A6 6 0 0117.84 11.2v4.82m-5.84-7.38a12.022 12.022 0 00-11.68 0 12.022 12.022 0 0011.68 0z" /></svg>
);
export const MusicIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-5 h-5 ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.07 1.918l-7.5 4.286a2.25 2.25 0 01-2.36 0l-7.5-4.286A2.25 2.25 0 013 18.25v-3.75m16.5-6.553L9 9m10.5-3v6.553" /></svg>
);
export const ReverbIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-5 h-5 ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V13.5m0 3V10.5m0 6V13.5m0 3V10.5m-3 6v-3m0 3v-3m0 3v-3m-3 3v-6m0 6v-6m0 6v-6m-3 6v-3m0 3v-3m0 3v-3M3 6.75h18" /></svg>
);

export const WaveformIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 20" className={className} preserveAspectRatio="none">
    <g fill="currentColor">
      <rect x="0" y="5" width="4" height="10" style={{'--pulse-delay': '0.1s'} as React.CSSProperties}><animate attributeName="height" values="10; 20; 5; 10" dur="1s" repeatCount="indefinite" /></rect>
      <rect x="8" y="5" width="4" height="10" style={{'--pulse-delay': '0.2s'} as React.CSSProperties}><animate attributeName="height" values="10; 15; 8; 10" dur="1s" repeatCount="indefinite" /></rect>
      <rect x="16" y="5" width="4" height="10" style={{'--pulse-delay': '0.3s'} as React.CSSProperties}><animate attributeName="height" values="10; 18; 6; 10" dur="1s" repeatCount="indefinite" /></rect>
      <rect x="24" y="5" width="4" height="10" style={{'--pulse-delay': '0.4s'} as React.CSSProperties}><animate attributeName="height" values="10; 12; 9; 10" dur="1s" repeatCount="indefinite" /></rect>
      <rect x="32" y="5" width="4" height="10" style={{'--pulse-delay': '0.5s'} as React.CSSProperties}><animate attributeName="height" values="10; 20; 5; 10" dur="1s" repeatCount="indefinite" /></rect>
      <rect x="40" y="5" width="4" height="10" style={{'--pulse-delay': '0.6s'} as React.CSSProperties}><animate attributeName="height" values="10; 16; 7; 10" dur="1s" repeatCount="indefinite" /></rect>
      <rect x="48" y="5" width="4" height="10" style={{'--pulse-delay': '0.7s'} as React.CSSProperties}><animate attributeName="height" values="10; 19; 5; 10" dur="1s" repeatCount="indefinite" /></rect>
      <rect x="56" y="5" width="4" height="10" style={{'--pulse-delay': '0.8s'} as React.CSSProperties}><animate attributeName="height" values="10; 14; 8; 10" dur="1s" repeatCount="indefinite" /></rect>
      <rect x="64" y="5" width="4" height="10" style={{'--pulse-delay': '0.9s'} as React.CSSProperties}><animate attributeName="height" values="10; 17; 6; 10" dur="1s" repeatCount="indefinite" /></rect>
      <rect x="72" y="5" width="4" height="10" style={{'--pulse-delay': '1.0s'} as React.CSSProperties}><animate attributeName="height" values="10; 20; 5; 10" dur="1s" repeatCount="indefinite" /></rect>
      <rect x="80" y="5" width="4" height="10" style={{'--pulse-delay': '1.1s'} as React.CSSProperties}><animate attributeName="height" values="10; 15; 8; 10" dur="1s" repeatCount="indefinite" /></rect>
      <rect x="88" y="5" width="4" height="10" style={{'--pulse-delay': '1.2s'} as React.CSSProperties}><animate attributeName="height" values="10; 18; 6; 10" dur="1s" repeatCount="indefinite" /></rect>
      <rect x="96" y="5" width="4" height="10" style={{'--pulse-delay': '1.3s'} as React.CSSProperties}><animate attributeName="height" values="10; 12; 9; 10" dur="1s" repeatCount="indefinite" /></rect>
    </g>
  </svg>
);
