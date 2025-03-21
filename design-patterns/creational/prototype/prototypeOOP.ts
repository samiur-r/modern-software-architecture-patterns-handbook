interface Prototype<T> {
  clone(): T;
}

class Car implements Prototype<Car> {
  constructor(public model: string, public features: string[]) {}

  clone(): Car {
    return new Car(this.model, [...this.features]);
  }

  toString(): string {
    return `Car(model=${this.model}, features=${this.features.join(", ")})`;
  }
}

const prototypeCar = new Car("Sedan", ["Air Conditioning", "ABS"]);

const car1 = prototypeCar.clone();
car1.features.push("Sunroof");

const car2 = prototypeCar.clone();
car2.model = "Hatchback";

console.log(car1.toString()); // Car(model=Sedan, features=Air Conditioning, ABS, Sunroof)
console.log(car2.toString()); // Car(model=Hatchback, features=Air Conditioning, ABS)
