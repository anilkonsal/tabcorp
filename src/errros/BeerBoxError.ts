export default class BeerBoxError extends Error {
  public static BEERBOX_NAME_EMPTY = 'BEERBOX_NAME_EMPTY: Beer Box name cannot be empty';
  public static BEERBOX_TEMP_ERROR = 'BEERBOX_TEMP_ERROR: Min Temperature should be less than or equal to Max Temp';

  constructor(public message: string) {
    super(message);
    this.name = 'BeerBoxError';
    this.message = message;
  }
}
