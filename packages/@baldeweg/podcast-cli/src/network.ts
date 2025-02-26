import { mkdir, writeFile, access } from 'fs/promises';
import yaml from 'yaml';

/**
 * Create a network
 */
const createNetwork = async (name = 'network') => {
  const slug = (await import('slug')).default;
  const slugifiedName = slug(name);

  try {
    await access(slugifiedName);
    console.log(`\x1b[31mNetwork '${name}' already exists.\x1b[0m`);
    return;
  } catch (error) {
    // do nothing
  }

  await mkdir(slugifiedName);

  const filePath = `${slugifiedName}/network.yaml`;
  const content = yaml.stringify({ "name": name });
  await writeFile(filePath, content);

  console.log(`\x1b[32mNetwork '${name}' created successfully.\x1b[0m`);
}

export { createNetwork };
