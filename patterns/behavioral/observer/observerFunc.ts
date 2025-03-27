type Observer = (news: string) => void;

const createNewsAgency = () => {
  const observers = new Set<Observer>();

  return {
    subscribe: (observer: Observer) => observers.add(observer),
    unsubscribe: (observer: Observer) => observers.delete(observer),
    publishNews: (news: string) => {
      console.log("News:", news);
      observers.forEach((observer) => observer(news));
    },
  };
};

const agency = createNewsAgency();

// Functional "NewsReader" equivalents
const reader1: Observer = (news) => {
  console.log(`Alice received news: ${news}`);
};

const reader2: Observer = (news) => {
  console.log(`Bob received news: ${news}`);
};

// Subscribing
agency.subscribe(reader1);
agency.subscribe(reader2);

// Publishing news
agency.publishNews("TypeScript 5.5 released!");

// Output:
// News: TypeScript 5.5 released!
// Alice received news: TypeScript 5.5 released!
// Bob received news: TypeScript 5.5 released!
