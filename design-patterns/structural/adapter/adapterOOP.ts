interface Logger {
  log(message: string): void;
  error(message: string): void;
}

// ❌ Incompatible Loggers (Adaptees)

// Legacy Logger
class LegacyLogger {
  writeInfo(msg: string) {
    console.log("Legacy INFO:", msg);
  }

  writeError(msg: string) {
    console.error("Legacy ERROR:", msg);
  }
}

// SDK Logger
class SdkLogger {
  send(level: "log" | "error", msg: string) {
    console.log(`[SDK-${level.toUpperCase()}] ${msg}`);
  }
}

// Adapters to make them compatible

// Adapter: LegacyLogger → Logger
class LegacyLoggerAdapter implements Logger {
  constructor(private legacy: LegacyLogger) {}

  log(message: string): void {
    this.legacy.writeInfo(message);
  }

  error(message: string): void {
    this.legacy.writeError(message);
  }
}

// Adapter: SdkLogger → Logger
class SdkLoggerAdapter implements Logger {
  constructor(private sdk: SdkLogger) {}

  log(message: string): void {
    this.sdk.send("log", message);
  }

  error(message: string): void {
    this.sdk.send("error", message);
  }
}

// Client Code (doesn’t care what’s behind)

function appFlow(logger: Logger) {
  logger.log("User signed in");
  logger.error("Something went wrong");
}

// usage

const legacyLogger = new LegacyLogger();
const sdkLogger = new SdkLogger();

const logger1: Logger = new LegacyLoggerAdapter(legacyLogger);
const logger2: Logger = new SdkLoggerAdapter(sdkLogger);

appFlow(logger1);
// Output:
// Legacy INFO: User signed in
// Legacy ERROR: Something went wrong

appFlow(logger2);
// Output:
// [SDK-LOG] User signed in
// [SDK-ERROR] Something went wrong
