import { mkdirSync } from 'fs';

export function createEpisodeDirectory() {
  mkdirSync('episode', { recursive: true });
  console.log('Episode directory created');
}
