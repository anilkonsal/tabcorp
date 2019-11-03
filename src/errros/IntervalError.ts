export default class IntervalError extends Error {
  public static INTERVAL_TOO_LOW = 'ERROR_INT_LOW: Interval should be greater than or equal to 15 seconds';

  constructor(public message: string) {
    super(message);
    this.name = 'IntervalError';
    this.message = message;
  }
}
