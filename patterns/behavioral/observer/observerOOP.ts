interface Observer {
  update(data: string): void;
}

// Subject (Observable)
class NewsAgency {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  publishNews(news: string): void {
    console.log("News:", news);
    this.observers.forEach((observer) => observer.update(news));
  }
}

// Concrete Observer
class NewsReader implements Observer {
  constructor(private name: string) {}

  update(data: string): void {
    console.log(`${this.name} received news: ${data}`);
  }
}

// Usage
const agency = new NewsAgency();
const reader1 = new NewsReader("Alice");
const reader2 = new NewsReader("Bob");

agency.subscribe(reader1);
agency.subscribe(reader2);

agency.publishNews("TypeScript 5.5 released!");
