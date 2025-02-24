import { mkdir, writeFile } from 'fs/promises';
import yaml from 'yaml';

/**
 * Create an episode
 */
const createEpisode = async (name = 'episode') => {
  await mkdir(name);

  const content = yaml.stringify({ "name": name, "description": "Description" });

  const files = [
    { path: `${name}/episode.yaml`, content: content },
    { path: `${name}/shownotes.md`, content: `# ${name}\n` }
  ];

  await Promise.all(files.map(file => writeFile(file.path, file.content)));

  console.log(`\x1b[32mEpisode '${name}' created\x1b[0m`);
}

export { createEpisode }
