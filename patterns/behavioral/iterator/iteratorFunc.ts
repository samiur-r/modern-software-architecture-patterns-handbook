function* createIterator<T>(items: T[]) {
  for (let item of items) {
    yield item;
  }
}

// Usage
const fruits = ["apple", "banana", "cherry"];
const fruitIterator = createIterator(fruits);

for (const fruit of fruitIterator) {
  console.log(fruit);
}
