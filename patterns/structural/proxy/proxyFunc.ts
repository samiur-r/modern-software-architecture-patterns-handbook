const expensiveCalculation = (n: number): number => {
  console.log(`Calculating for ${n}...`);
  return n * n; // Simulate an expensive operation
};

// Caching Proxy as a higher-order function
const createCachingProxy = (
  fn: (n: number) => number
): ((n: number) => number) => {
  const cache = new Map<number, number>();

  return (n: number) => {
    if (cache.has(n)) {
      console.log("Returning cached result");
      return cache.get(n)!;
    }

    const result = fn(n);
    cache.set(n, result);
    return result;
  };
};

// Usage
const cachedCalc = createCachingProxy(expensiveCalculation);

console.log(cachedCalc(5)); // Logs "Calculating for 5..."
console.log(cachedCalc(5)); // Logs "Returning cached result"
console.log(cachedCalc(7)); // Logs "Calculating for 7..."
console.log(cachedCalc(7)); // Logs "Returning cached result"
