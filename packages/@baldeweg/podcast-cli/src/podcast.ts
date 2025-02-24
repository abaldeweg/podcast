import { mkdirSync } from 'fs';

export function createPodcastDirectory() {
  mkdirSync('podcast', { recursive: true });
  console.log('Podcast directory created');
}
