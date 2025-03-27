const createLogger = (() => {
  let instance: { log: (msg: string) => void };

  return () => {
    if (!instance) {
      console.log("Logger initialized!");
      instance = {
        log: (msg: string) => console.log(`[Log] ${msg}`),
      };
    }
    return instance;
  };
})();

const loggerA = createLogger();
const loggerB = createLogger();

loggerA.log("Functional Hello");
console.log(loggerA === loggerB); // true
