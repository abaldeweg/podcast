#!/usr/bin/env node

import { Command } from 'commander';
import { createNetwork } from './network';
import { createPodcastDirectory } from './podcast';
import { createEpisodeDirectory } from './episode';

const program = new Command();

program
  .name('podcast-cli')
  .description('CLI to manage podcasts')

program
  .command('network')
  .description('Manage networks')
  .command('create <name>')
  .description('Create a network directory')
  .action((name) => createNetwork(name));

program
  .command('podcast create')
  .description('Create a podcast directory')
  .action(createPodcastDirectory);

program
  .command('episode create')
  .description('Create an episode directory')
  .action(createEpisodeDirectory);

program.parse(process.argv);
