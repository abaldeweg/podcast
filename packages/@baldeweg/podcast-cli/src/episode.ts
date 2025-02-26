import { mkdir, writeFile, access } from 'fs/promises';
import yaml from 'yaml';

/**
 * Create an episode
 */
const createEpisode = async (name = 'episode') => {
  const slug = (await import('slug')).default;
  const slugifiedName = slug(name);

  try {
    await access(slugifiedName);
    console.log(`\x1b[31mEpisode '${name}' already exists.\x1b[0m`);
    return;
  } catch (error) {
    // do nothing
  }

  await mkdir(slugifiedName);

  const content = yaml.stringify({ "name": name, "description": "Description" });

  const files = [
    { path: `${slugifiedName}/episode.yaml`, content: content },
    { path: `${slugifiedName}/shownotes.md`, content: `# ${name}\n` }
  ];

  await Promise.all(files.map(file => writeFile(file.path, file.content)));

  console.log(`\x1b[32mEpisode '${name}' created\x1b[0m`);
}

export { createEpisode }
