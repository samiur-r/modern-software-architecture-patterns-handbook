const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  const cache = new Map<string, ReturnType<T>>();

  return ((...args: any[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Fetching from cache...");
      return cache.get(key)!;
    }
    console.log("Computing...");
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
};

// Simulate heavy computation
const expensiveSum = (a: number, b: number) => {
  return a + b;
};

const memoizedSum = memoize(expensiveSum);

console.log(memoizedSum(2, 3)); // Computes: 5
console.log(memoizedSum(2, 3)); // From cache: 5
