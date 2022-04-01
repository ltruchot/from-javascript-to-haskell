import { promises as fsp } from 'fs';
import { getAdultsAgesAverage } from './shared';

fsp.readFile('./../data/persons.json')
  .then(JSON.parse)
  .then(getAdultsAgesAverage)
  .then(console.log);
