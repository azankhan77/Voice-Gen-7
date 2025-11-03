
export type Voice = 'Kore' | 'Puck' | 'Charon' | 'Fenrir' | 'Zephyr';

export interface VoiceOption {
  id: Voice;
  name: string;
  description: string;
  lang: string;
}

export interface VoiceSettings {
  voice: Voice;
  promptPrefix: string;
  backgroundMusic: boolean;
  reverb: boolean;
}

export interface GeneratedAudio {
  id: number;
  text: string;
  audioData: string; // base64 encoded
  voice: Voice;
}

export interface Preset {
  name: string;
  voice: Voice;
  promptPrefix: string;
  exampleText: string;
}
