import type { VoiceOption, Preset } from './types.ts';

// NOTE: The Gemini TTS API currently offers a limited set of pre-built voices.
// We are reusing the available voice IDs ('Zephyr', 'Kore', etc.) to expand the selection
// cosmetically. The actual voice accent may not perfectly match the label.
// Requests for languages like Arabic, Hindi, and Japanese cannot be fulfilled until supported by the API.
export const VOICES: VoiceOption[] = [
  { id: 'Zephyr', name: 'Zephyr (Male)', description: 'Clear, standard voice', lang: 'English (US)' },
  { id: 'Kore', name: 'Kore (Female)', description: 'Warm, gentle voice', lang: 'English (US)' },
  { id: 'Puck', name: 'Puck (Male)', description: 'Bright, youthful voice', lang: 'English (UK)' },
  { id: 'Zephyr', name: 'Jabu (Male)', description: 'Standard voice', lang: 'English (SA)' },
  { id: 'Kore', name: 'Nia (Female)', description: 'Warm voice', lang: 'English (SA)' },
  { id: 'Charon', name: 'Omar (Male)', description: 'Deep, clear voice', lang: 'Arabic' },
  { id: 'Kore', name: 'Layla (Female)', description: 'Gentle, warm voice', lang: 'Arabic' },
  { id: 'Charon', name: 'Klaus (Male)', description: 'Deep, mature voice', lang: 'German' },
  { id: 'Kore', name: 'Eva (Female)', description: 'Calm, standard voice', lang: 'German' },
  { id: 'Fenrir', name: 'Mateo (Male)', description: 'Energetic, expressive voice', lang: 'Spanish' },
  { id: 'Kore', name: 'Sofia (Female)', description: 'Warm, friendly voice', lang: 'Spanish' },
  { id: 'Charon', name: 'Aryan (Male)', description: 'Deep, mature voice', lang: 'Hindi' },
  { id: 'Kore', name: 'Priya (Female)', description: 'Warm, gentle voice', lang: 'Hindi' },
  { id: 'Puck', name: 'Kenji (Male)', description: 'Bright, youthful voice', lang: 'Japanese' },
  { id: 'Kore', name: 'Sakura (Female)', description: 'Calm, standard voice', lang: 'Japanese' },
  { id: 'Kore', name: 'Yuna (Female)', description: 'Warm, K-Pop style voice', lang: 'Korean' },
];

export const PRESETS: Preset[] = [
  {
    name: 'Narrator',
    voice: 'Charon',
    promptPrefix: 'Narrate in a deep, calm voice:',
    exampleText: 'In a world of circuits and code, a new intelligence was born.'
  },
  {
    name: 'YouTuber',
    voice: 'Fenrir',
    promptPrefix: 'Say with high energy and excitement:',
    exampleText: 'What is up everyone! Welcome back to my channel! Today we are unboxing the new Gemini AI chip!'
  },
  {
    name: 'AI Assistant',
    voice: 'Kore',
    promptPrefix: 'Respond in a helpful, friendly tone:',
    exampleText: 'Of course, I can help with that. What information are you looking for?'
  },
  {
    name: 'News Anchor',
    voice: 'Zephyr',
    promptPrefix: 'Report the news in a clear, professional tone:',
    exampleText: 'Good evening. Our top story tonight: breakthroughs in artificial intelligence are accelerating at an unprecedented rate.'
  },
  {
    name: 'Documentary',
    voice: 'Charon',
    promptPrefix: 'Narrate in a serious, informative tone:',
    exampleText: 'The ancient pyramids have stood for millennia, a testament to human ingenuity and perseverance.'
  },
  {
    name: 'Meditative',
    voice: 'Kore',
    promptPrefix: 'Speak in a soft, soothing voice:',
    exampleText: 'Breathe in deeply, and as you exhale, let go of all tension. You are calm, you are at peace.'
  },
  {
    name: 'Storyteller',
    voice: 'Kore',
    promptPrefix: 'Tell a story in a gentle, cinematic tone:',
    exampleText: 'Once upon a time, in a forest bathed in moonlight, a young fox looked up at the stars and dreamed.'
  },
  {
    name: 'Anime Hero',
    voice: 'Puck',
    promptPrefix: 'Shout in a high-pitched, expressive anime style:',
    exampleText: 'I won\'t give up! This is my ultimate power!'
  }
];