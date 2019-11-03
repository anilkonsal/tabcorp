import { BeerBoxOptions } from './types';
import BeerBoxError from './errros/BeerBoxError';

class BeerBox {
  private boxName: string;

  private options: BeerBoxOptions;

  private temp = 0;

  constructor(name: string, options: BeerBoxOptions) {
    if (name.trim() === '') {
      throw new BeerBoxError(BeerBoxError.BEERBOX_NAME_EMPTY);
    }

    const { minTemp, maxTemp } = options;
    if (maxTemp < minTemp) {
      throw new BeerBoxError(BeerBoxError.BEERBOX_TEMP_ERROR);
    }

    this.boxName = name;
    this.options = options;
  }

  get name(): string {
    return this.boxName;
  }

  get temperature(): number {
    this.temp = Math.floor(Math.random() * 10 + 1);
    return this.temp;
  }

  get minTemp(): number {
    return this.options.minTemp;
  }

  get maxTemp(): number {
    return this.options.maxTemp;
  }
}

export default BeerBox;
