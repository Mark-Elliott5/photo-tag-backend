#!/usr/bin/env node */

import 'dotenv/config';
import mongoose from 'mongoose';

import { IWaldo, Waldo } from '../src/types/mongoose/Waldo';
import { IPlayer, Player } from '../src/types/mongoose/Player';

console.log(
  'Populating the designated MongoDB database with the provided data...'
);

mongoose.set('strictQuery', false);

const mongoDB = process.env.MONGODB_URI ?? '';

async function waldoCreator(waldoData: IWaldo) {
  const waldo = new Waldo(waldoData);

  await waldo.save();
  console.log(`Added item: ${waldoData.name}`);
}

async function createAllWaldos() {
  console.log('Adding articles');
  await Promise.all([
    waldoCreator({
      name: 'Aang',
      minX: 81,
      minY: 30,
      maxX: 85,
      maxY: 33,
    }),
    waldoCreator({
      name: 'G-Man',
      minX: 24,
      minY: 68,
      maxX: 29,
      maxY: 69,
    }),
    waldoCreator({
      name: 'Ice King',
      minX: 2,
      minY: 8,
      maxX: 6,
      maxY: 11,
    }),
    waldoCreator({
      name: 'Mikasa',
      minX: 9,
      minY: 88,
      maxX: 13,
      maxY: 94,
    }),
    waldoCreator({
      name: 'Ghostface',
      minX: 95,
      minY: 53,
      maxX: 99,
      maxY: 60,
    }),
    waldoCreator({
      name: 'Togemon',
      minX: 72,
      minY: 34,
      maxX: 78,
      maxY: 37,
    }),
    waldoCreator({
      name: 'Max Headroom',
      minX: 73,
      minY: 40,
      maxX: 78,
      maxY: 44,
    }),
    waldoCreator({
      name: 'Old Snake',
      minX: 49,
      minY: 18,
      maxX: 54,
      maxY: 21,
    }),
    waldoCreator({
      name: 'Reze',
      minX: 44,
      minY: 19,
      maxX: 49,
      maxY: 24,
    }),
    waldoCreator({
      name: 'Phoenix Wright',
      minX: 48,
      minY: 23,
      maxX: 53,
      maxY: 29,
    }),
    waldoCreator({
      name: 'Fry',
      minX: 4,
      minY: 10,
      maxX: 8,
      maxY: 13,
    }),
    waldoCreator({
      name: 'Adam Jensen',
      minX: 4,
      minY: 13,
      maxX: 9,
      maxY: 18,
    }),
    waldoCreator({
      name: 'Yoshimitsu',
      minX: 55,
      minY: 44,
      maxX: 61,
      maxY: 48,
    }),
    waldoCreator({
      name: 'Hank Hill',
      minX: 5,
      minY: 33,
      maxX: 10,
      maxY: 37,
    }),
    waldoCreator({
      name: 'Skull Knight',
      minX: 15,
      minY: 39,
      maxX: 20,
      maxY: 42,
    }),
    waldoCreator({
      name: 'Jetstream Sam',
      minX: 50,
      minY: 53,
      maxX: 56,
      maxY: 58,
    }),
    waldoCreator({
      name: 'Afro Samurai',
      minX: 62,
      minY: 50,
      maxX: 68,
      maxY: 57,
    }),
    waldoCreator({
      name: 'The Dude',
      minX: 34,
      minY: 61,
      maxX: 39,
      maxY: 66,
    }),
    waldoCreator({
      name: 'Chun Li',
      minX: 9,
      minY: 58,
      maxX: 13,
      maxY: 62,
    }),
    waldoCreator({
      name: 'Isaac Clarke',
      minX: 48,
      minY: 81,
      maxX: 54,
      maxY: 88,
    }),
    waldoCreator({
      name: 'Mr. X',
      minX: 2,
      minY: 91,
      maxX: 10,
      maxY: 99,
    }),
    waldoCreator({
      name: 'Vash',
      minX: 10,
      minY: 78,
      maxX: 23,
      maxY: 82,
    }),
    waldoCreator({
      name: 'Raiden MK',
      minX: 14,
      minY: 72,
      maxX: 20,
      maxY: 78,
    }),
    waldoCreator({
      name: 'Gollum',
      minX: 35,
      minY: 72,
      maxX: 42,
      maxY: 75,
    }),
    waldoCreator({
      name: 'Tintin',
      minX: 43,
      minY: 68,
      maxX: 49,
      maxY: 72,
    }),
  ]);
}

async function playerCreator(playerData: IPlayer) {
  const player = new Player(playerData);

  await player.save();
  console.log(`Added item: ${playerData.name}`);
}

async function createAllPlayers() {
  console.log('Adding articles');
  await Promise.all([
    playerCreator({
      name: 'Aang',
      time: 180000,
    }),
    playerCreator({
      name: 'G-Man',
      time: 285000,
    }),
    playerCreator({
      name: 'Ice King',
      time: 390000,
    }),
    playerCreator({
      name: 'Mikasa',
      time: 495000,
    }),
    playerCreator({
      name: 'Ghostface',
      time: 600000,
    }),
    playerCreator({
      name: 'Togemon',
      time: 705000,
    }),
    playerCreator({
      name: 'Max Headroom',
      time: 810000,
    }),
    playerCreator({
      name: 'Old Snake',
      time: 915000,
    }),
    playerCreator({
      name: 'Reze',
      time: 1020000,
    }),
    playerCreator({
      name: 'Phoenix Wright',
      time: 1125000,
    }),
    playerCreator({
      name: 'Fry',
      time: 1230000,
    }),
    playerCreator({
      name: 'Adam Jensen',
      time: 1335000,
    }),
    playerCreator({
      name: 'Yoshimitsu',
      time: 1440000,
    }),
    playerCreator({
      name: 'Hank Hill',
      time: 1545000,
    }),
    playerCreator({
      name: 'Skull Knight',
      time: 1650000,
    }),
    playerCreator({
      name: 'Jetstream Sam',
      time: 1755000,
    }),
    playerCreator({
      name: 'Afro Samurai',
      time: 1860000,
    }),
    playerCreator({
      name: 'The Dude',
      time: 1965000,
    }),
    playerCreator({
      name: 'Chun Li',
      time: 2070000,
    }),
    playerCreator({
      name: 'Isaac Clarke',
      time: 2175000,
    }),
    playerCreator({
      name: 'Mr. X',
      time: 2280000,
    }),
    playerCreator({
      name: 'Vash',
      time: 2385000,
    }),
    playerCreator({
      name: 'Raiden MK',
      time: 2490000,
    }),
    playerCreator({
      name: 'Gollum',
      time: 2595000,
    }),
    playerCreator({
      name: 'Tintin',
      time: 2700000,
    }),
  ]);
}

async function main() {
  console.log('Debug: About to connect');
  await mongoose.connect(mongoDB);
  console.log('Debug: Connected');
  console.log('Creating Waldos');
  await createAllWaldos();

  console.log('Creating Players for leaderboard');

  await createAllPlayers();

  console.log('Debug: Closing mongoose');
  mongoose.connection.close();
}

main().catch((err) => console.log(err));
