interface ExpensiveService {
  calculate(n: number): number;
}

class RealExpensiveService implements ExpensiveService {
  calculate(n: number): number {
    console.log(`Calculating for ${n}...`);
    return n * n;
  }
}

class CachingProxy implements ExpensiveService {
  private realService = new RealExpensiveService();
  private cache = new Map<number, number>();

  calculate(n: number): number {
    if (this.cache.has(n)) {
      console.log("Returning cached result");
      return this.cache.get(n)!;
    }
    const result = this.realService.calculate(n);
    this.cache.set(n, result);
    return result;
  }
}

// Usage
const service: ExpensiveService = new CachingProxy();
console.log(service.calculate(5)); // Calculates
console.log(service.calculate(5)); // Cached
