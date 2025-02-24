#!/usr/bin/env node

import { Command } from 'commander';
import { createNetworkDirectory } from './network';
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
  .action(createNetworkDirectory);

program.parse(process.argv);
