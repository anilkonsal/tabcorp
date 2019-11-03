jest.mock('say-promise');
jest.mock('chalk', () => ({
  red: jest.fn(),
  green: jest.fn(),
  blue: jest.fn(),
}));
import BeerBox from '../../src/BeerBox.class';
import { getTemperatures, sendAlerts, processTemperatures, run } from '../../src/app';
import chalk from 'chalk';

const sayp = require('say-promise'); // eslint-disable-line @typescript-eslint/no-var-requires

describe('App', (): void => {
  beforeEach(() => {
    jest
      .spyOn(global.Math, 'random')
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.2)
      .mockReturnValueOnce(0.3);
    jest.spyOn(global.console, 'log');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe('getTemperatures', (): void => {
    it('should return an array of beer box temps', (): void => {
      const beerBoxesArr = [
        new BeerBox('Beer-1', { minTemp: 4, maxTemp: 6 }),
        new BeerBox('Beer-2', { minTemp: 5, maxTemp: 6 }),
      ];

      const expected = [
        {
          name: 'Beer-1',
          temp: 2,
          minTemp: 4,
          maxTemp: 6,
        },
        {
          name: 'Beer-2',
          temp: 3,
          minTemp: 5,
          maxTemp: 6,
        },
      ];
      const result = getTemperatures(beerBoxesArr);

      expect(result).toEqual(expected);
    });
  });
  describe('sendAlerts', (): void => {
    it('should call sayp.speak if the belowMinAlerts is not empty', async (): Promise<void> => {
      const belowMinAlerts = ['Beer-1'];
      const aboveMaxAlerts = ['Beer-2', 'Beer-3'];

      await sendAlerts(belowMinAlerts, aboveMaxAlerts);
      expect(sayp.speak).toHaveBeenCalledTimes(2);
      expect(sayp.speak).toHaveBeenCalledWith(
        `Temperatures of ${belowMinAlerts.join(',')} are below their respective minimum`,
      );
      expect(sayp.speak).toHaveBeenCalledWith(
        `Temperatures of ${aboveMaxAlerts.join(',')} are above their respective maximum`,
      );
    });
  });

  describe('processTemperatures', (): void => {
    it('should log Temperatures of all the Beer Boxes', (): void => {
      const beerBoxTemps = [
        {
          name: 'Beer-1',
          temp: 2,
          minTemp: 4,
          maxTemp: 6,
        },
        {
          name: 'Beer-2',
          temp: 9,
          minTemp: 5,
          maxTemp: 6,
        },
        {
          name: 'Beer-3',
          temp: 6,
          minTemp: 5,
          maxTemp: 7,
        },
      ];
      processTemperatures(beerBoxTemps);
      expect(global.console.log).toHaveBeenCalledTimes(3);
      expect(chalk.blue).toHaveBeenCalledTimes(1);
      expect(chalk.red).toHaveBeenCalledTimes(1);
      expect(chalk.green).toHaveBeenCalledTimes(1);
    });
  });
  describe('run', (): void => {
    it('should ', (): void => {
      const beerBoxesArr = [
        new BeerBox('Beer-1', { minTemp: 4, maxTemp: 6 }),
        new BeerBox('Beer-2', { minTemp: 5, maxTemp: 6 }),
      ];

      run(beerBoxesArr);
      expect(global.console.log).toHaveBeenCalledTimes(2);
      expect(chalk.blue).toHaveBeenCalledTimes(2);
      // expect(chalk.red).toHaveBeenCalledTimes(1);
    });
  });
});
