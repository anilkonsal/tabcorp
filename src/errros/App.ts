export default class AppError extends Error {
  public static APP_EMPTY_ARRAY = 'APP_EMPTY_ARRAY: Input Array should not be empty';

  constructor(public message: string) {
    super(message);
    this.name = 'AppError';
    this.message = message;
  }
}
