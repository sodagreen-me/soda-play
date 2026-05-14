export interface AiDescription {
  text: string;
  explanation: string;
}

export interface Song {
  name: string;
  artist: string;
  album: string;
  lyrics: string;
  aiDescription: [AiDescription, AiDescription, AiDescription];
}
