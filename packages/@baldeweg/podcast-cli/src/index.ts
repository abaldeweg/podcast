#!/usr/bin/env node

import { Command } from 'commander';
import { createNetworkDirectory } from './network';
import { createPodcastDirectory } from './podcast';

const program = new Command();

program
  .name('podcast-cli')
  .description('CLI to manage podcasts')

program
  .command('network create')
  .description('Create a network directory')
  .action(createNetworkDirectory);

program
  .command('podcast create')
  .description('Create a podcast directory')
  .action(createPodcastDirectory);

program.parse(process.argv);
