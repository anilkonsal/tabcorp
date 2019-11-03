import BeerBox from '../../src/BeerBox.class';
import BeerBoxError from '../../src/errros/BeerBoxError';
describe('BeerBox', (): void => {
  describe('constructor', (): void => {
    it('should throw an error if name is not provided', (): void => {
      try {
        new BeerBox('', { minTemp: 1, maxTemp: 2 });
      } catch (e) {
        expect(e instanceof BeerBoxError).toBeTruthy();
        expect(e.message).toEqual(BeerBoxError.BEERBOX_NAME_EMPTY);
      }
    });
  });
  describe('name', (): void => {
    it('should throw and error if the min Temp is greater ythan the max temp', (): void => {
      try {
        new BeerBox('Test', { minTemp: 10, maxTemp: 2 });
      } catch (e) {
        expect(e instanceof BeerBoxError).toBeTruthy();
        expect(e.message).toEqual(BeerBoxError.BEERBOX_TEMP_ERROR);
      }
    });

    it('should assign the name of beerbox', () => {
      const bbox = new BeerBox('test', { minTemp: 1, maxTemp: 2 });
      expect(bbox.name).toEqual('test');
    });
  });
  describe('temperature', (): void => {
    beforeEach(() => {
      jest.spyOn(global.Math, 'random').mockReturnValue(10);
    });
    afterEach(() => {
      jest.restoreAllMocks();
    });
    it('should return the temperature of the bbox', () => {
      const bbox = new BeerBox('test', { minTemp: 1, maxTemp: 2 });
      expect(bbox.temperature).toEqual(101);
    });
  });
  describe('minTemp', (): void => {
    it('should return the options.minTemp when beerbox.minTemp is called', () => {
      const bbox = new BeerBox('test', { minTemp: 1, maxTemp: 2 });
      expect(bbox.minTemp).toEqual(1);
    });
  });
  describe('maxTemp', (): void => {
    it('should return the options.maxTemp when beerbox.maxTemp is called', () => {
      const bbox = new BeerBox('test', { minTemp: 1, maxTemp: 2 });
      expect(bbox.maxTemp).toEqual(2);
    });
  });
});
