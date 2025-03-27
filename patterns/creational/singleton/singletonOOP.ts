class Logger {
  private static instance: Logger;

  private constructor() {
    console.log("Logger initialized!");
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    console.log(`[Log] ${message}`);
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Hello");
console.log(logger1 === logger2); // true
