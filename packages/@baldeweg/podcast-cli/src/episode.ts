import { mkdir, writeFile } from 'fs/promises';
import yaml from 'yaml';

/**
 * Create an episode
 */
const createEpisode = (name = 'episode') => {
  mkdir(name);

  const content = yaml.stringify({ "name": name, "description": "Description" });

  const files = [
    { path: `${name}/episode.yaml`, content: content },
    { path: `${name}/shownotes.md`, content: `# ${name}\n` }
  ];

  files.forEach(file => writeFile(file.path, file.content));

  console.log(`\x1b[32mEpisode '${name}' created\x1b[0m`);
}

export { createEpisode }
