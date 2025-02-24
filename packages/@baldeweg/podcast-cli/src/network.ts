import { mkdirSync } from 'fs';

export function createNetworkDirectory() {
  const dirName = 'network';
  mkdirSync(dirName);
  console.log(`Directory '${dirName}' created successfully.`);
}
