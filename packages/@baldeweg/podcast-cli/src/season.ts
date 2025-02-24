import fs from 'fs';
import path from 'path';

export function createSeasonDirectory() {
  const seasonPath = path.join(process.cwd(), 'season');
  if (!fs.existsSync(seasonPath)) {
    fs.mkdirSync(seasonPath);
    console.log('Season directory created.');
  } else {
    console.log('Season directory already exists.');
  }
}
