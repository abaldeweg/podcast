#!/usr/bin/env node

import { Command } from 'commander';
import { mkdirSync } from 'fs';
import { readFileSync } from 'fs';
import { join } from 'path';

const program = new Command();

const packageJson = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf-8'));

program
  .name('podcast-cli')
  .description('CLI to manage podcasts')
  .version(packageJson.version);

program
  .command('network create')
  .description('Create a network directory')
  .action(() => {
    const dirName = 'network';
    mkdirSync(dirName);
    console.log(`Directory '${dirName}' created successfully.`);
  });

program.parse(process.argv);
