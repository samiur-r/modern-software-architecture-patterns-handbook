type Logger = {
  log: (message: string) => void;
  error: (message: string) => void;
};

// Incompatible: uses `writeInfo` and `writeError`
const legacyLogger = {
  writeInfo: (msg: string) => console.log("Legacy INFO:", msg),
  writeError: (msg: string) => console.error("Legacy ERROR:", msg),
};

// e.g., SDK with different signatures
const sdkLogger = {
  send: (level: "log" | "error", msg: string) =>
    console.log(`[SDK-${level.toUpperCase()}] ${msg}`),
};

// Adapter: Legacy Logger → Standard Logger

const adaptLegacyLogger = (legacy: typeof legacyLogger): Logger => ({
  log: legacy.writeInfo,
  error: legacy.writeError,
});

// Adapter: SDK Logger → Standard Logger
const adaptSdkLogger = (sdk: typeof sdkLogger): Logger => ({
  log: (msg) => sdk.send("log", msg),
  error: (msg) => sdk.send("error", msg),
});

// Usage in App (no idea what logger is behind)

const logger1 = adaptLegacyLogger(legacyLogger);
const logger2 = adaptSdkLogger(sdkLogger);

function appFlow(logger: Logger) {
  logger.log("User signed in");
  logger.error("Something went wrong");
}

// Plug in any adapted logger
appFlow(logger1); // Legacy INFO / Legacy ERROR
appFlow(logger2); // SDK-LOG / SDK-ERROR
