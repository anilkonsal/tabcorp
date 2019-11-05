import BeerBox from './BeerBox.class';
import { BeerBoxTemp } from './types';
import chalk from 'chalk';
// No typedef avaialable for this module, so had to require it
const sayp = require('say-promise'); // eslint-disable-line @typescript-eslint/no-var-requires

let belowMinAlts: string[] = [];
const aboveMaxAlts: string[] = [];

function getTemperatures(beerBoxes: BeerBox[]): BeerBoxTemp[] {
  const beerBoxesTemps = beerBoxes.map(
    (beerBox: BeerBox): BeerBoxTemp => {
      return {
        name: beerBox.name,
        temp: beerBox.temperature,
        minTemp: beerBox.minTemp,
        maxTemp: beerBox.maxTemp,
      };
    },
  );
  return beerBoxesTemps;
}

async function sendAlerts(belowMinAlerts: string[], aboveMaxAlerts: string[]): Promise<boolean> {
  if (belowMinAlerts.length) {
    await sayp.speak(`Temperatures of ${belowMinAlerts.join(',')} are below their respective minimum`);
  }
  if (aboveMaxAlerts.length) {
    await sayp.speak(`Temperatures of ${aboveMaxAlerts.join(',')} are above their respective maximum`);
  }
  return true;
}

function processTemperatures(temperatures: BeerBoxTemp[]): void {
  belowMinAlts = [];
  belowMinAlts = [];
  temperatures.forEach((beerBoxTemp: BeerBoxTemp) => {
    let color = chalk.green;
    if (beerBoxTemp.temp < beerBoxTemp.minTemp) {
      belowMinAlts.push(beerBoxTemp.name);
      color = chalk.blue;
    } else if (beerBoxTemp.temp > beerBoxTemp.maxTemp) {
      belowMinAlts.push(beerBoxTemp.name);
      color = chalk.red;
    }
    console.log(`Temperature for ${beerBoxTemp.name}: ${color(`${beerBoxTemp.temp}`)}`);
  });
  sendAlerts(belowMinAlts, aboveMaxAlts);
}

function run(beerBoxesArr: BeerBox[]): void {
  const temps = getTemperatures(beerBoxesArr);
  processTemperatures(temps);
}

export { run, processTemperatures, sendAlerts, getTemperatures };
