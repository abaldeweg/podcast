#!/usr/bin/env node

import { Command } from 'commander';
import { mkdirSync } from 'fs';

const program = new Command();

program
  .name('podcast-cli')
  .description('CLI to manage podcasts')
  .version('1.0.0');

program
  .command('network create')
  .description('Create a network directory')
  .action(() => {
    const dirName = 'network';
    mkdirSync(dirName);
    console.log(`Directory '${dirName}' created successfully.`);
  });

program.parse(process.argv);
