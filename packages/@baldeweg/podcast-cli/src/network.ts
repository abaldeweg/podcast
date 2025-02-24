import { mkdir, writeFile } from 'fs/promises';
import yaml from 'yaml';

/**
 * Create a network
 */
const createNetwork = async (name = 'network') => {
  await mkdir(name);

  const filePath = `${name}/network.yaml`;
  const content = yaml.stringify({ "name": name });
  await writeFile(filePath, content);

  console.log(`\x1b[32mNetwork '${name}' created successfully.\x1b[0m`);
}

export { createNetwork };
