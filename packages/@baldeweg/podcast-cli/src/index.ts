#!/usr/bin/env node

import { Command } from 'commander';
import { createNetwork } from './network';
import { createPodcast } from './podcast';
import { createEpisode } from './episode';

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
  .command('podcast')
  .description('Manage podcasts')
  .command('create <name>')
  .description('Create a podcast directory')
  .action((name) => createPodcast(name));

program
  .command('episode')
  .description('Manage episodes')
  .command('create <name>')
  .description('Create an episode directory')
  .action((name) => createEpisode(name));

program.parse(process.argv);
