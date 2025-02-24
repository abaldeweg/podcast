#!/usr/bin/env node

import { Command } from 'commander';
import { createNetworkDirectory } from './network';
import { createPodcastDirectory } from './podcast';
import { createEpisodeDirectory } from './episode';

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

program
  .command('episode create')
  .description('Create an episode directory')
  .action(createEpisodeDirectory);

program.parse(process.argv);
