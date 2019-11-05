jest.useFakeTimers();
jest.mock('say-promise');
const sayp = require('say-promise'); // eslint-disable-line @typescript-eslint/no-var-requires

describe('Index', (): void => {
  beforeEach(() => {
    jest
      .spyOn(global.Math, 'random')
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.2)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.4)
      .mockReturnValueOnce(0.5);
    jest.spyOn(global.console, 'log');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should print', (): void => {
    require('../../src/index');
    expect(console.log).toHaveBeenCalledTimes(7);
    expect(console.log).toHaveBeenCalledWith('==============================================');
    expect(setInterval).toHaveBeenCalledTimes(1);
  });
});
