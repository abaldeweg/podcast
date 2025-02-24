import { mkdir, writeFile } from 'fs/promises';
import yaml from 'yaml';

/**
 * Create a podcast
 */
const createPodcast = async (name = 'podcast') => {
  await mkdir(name);

  const filePath = `${name}/podcast.yaml`;
  const content = yaml.stringify({ "name": name, "description": "Description" });
  await writeFile(filePath, content);

  console.log(`\x1b[32mPodcast '${name}' created\x1b[0m`);
}

export { createPodcast }
