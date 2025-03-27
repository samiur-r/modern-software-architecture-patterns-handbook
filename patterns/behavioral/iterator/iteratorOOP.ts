interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}

class NameCollection {
  private items: string[] = [];

  add(name: string) {
    this.items.push(name);
  }

  getIterator(): Iterator<string> {
    let index = 0;
    const data = this.items;

    return {
      next: () => (index < data.length ? data[index++] : null),
      hasNext: () => index < data.length,
    };
  }
}

// Usage
const names = new NameCollection();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

const iterator = names.getIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
