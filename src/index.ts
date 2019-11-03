import * as dotenv from 'dotenv';
import BeerBox from './BeerBox.class';
import IntervalError from './errros/IntervalError';
import { run } from './app';
dotenv.config();
const intervalInSecs = Number(process.env.INTERVAL_IN_SECONDS);

if (intervalInSecs < 15) {
  throw new IntervalError(IntervalError.INTERVAL_TOO_LOW);
}

const beerBoxesArr = [
  new BeerBox('Beer-1', { minTemp: 4, maxTemp: 6 }),
  new BeerBox('Beer-2', { minTemp: 5, maxTemp: 6 }),
  new BeerBox('Beer-3', { minTemp: 4, maxTemp: 7 }),
  new BeerBox('Beer-4', { minTemp: 6, maxTemp: 8 }),
  new BeerBox('Beer-5', { minTemp: 3, maxTemp: 5 }),
];

run(beerBoxesArr);

setInterval((): void => {
  run(beerBoxesArr);
}, intervalInSecs * 1000);
