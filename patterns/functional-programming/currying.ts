// Example 1

function curry<A, B, C, R>(
  fn: (a: A, b: B, c: C) => R
): (a: A) => (b: B) => (c: C) => R {
  return (a: A) => (b: B) => (c: C) => fn(a, b, c);
}

const add = (a: number, b: number, c: number) => a + b + c;
const curried = curry(add);

const add1 = curried(1);
const add1and2 = add1(2);
const result = add1and2(3); // 6

// Example 2

const logger = (level: string) => (category: string) => (message: string) =>
  `[${level.toUpperCase()}][${category}]: ${message}`;

const infoLogger = logger("info");
const authLogger = infoLogger("auth");

console.log(authLogger("User logged in"));
// [INFO][auth]: User logged in
