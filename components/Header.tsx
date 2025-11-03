import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-purple-400 neon-glow-purple">
        Voice Gen 7
      </h1>
      <p className="text-blue-300 mt-2">Next-Generation AI Text-to-Speech by Azan</p>
    </header>
  );
};