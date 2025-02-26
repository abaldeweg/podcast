import { mkdir, writeFile, access } from 'fs/promises';
import yaml from 'yaml';

/**
 * Create a podcast
 */
const createPodcast = async (name = 'podcast') => {
  const slug = (await import('slug')).default;
  const slugifiedName = slug(name);

  try {
      await access(slugifiedName);
      console.log(`\x1b[31mPodcast '${name}' already exists.\x1b[0m`);
      return;
    } catch (error) {
      // do nothing
    }

  await mkdir(slugifiedName);

  const filePath = `${slugifiedName}/podcast.yaml`;
  const content = yaml.stringify({ "name": name, "description": "Description" });
  await writeFile(filePath, content);

  console.log(`\x1b[32mPodcast '${name}' created\x1b[0m`);
}

export { createPodcast }
