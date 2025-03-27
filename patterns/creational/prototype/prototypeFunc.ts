type Car = {
  model: string;
  features: string[];
};

const prototypeCar: Car = {
  model: "Sedan",
  features: ["Air Conditioning", "ABS"],
};

function cloneCar(prototype: Car, updates: Partial<Car>): Car {
  return {
    ...prototype,
    ...updates,
    features: updates.features ?? [...prototype.features],
  };
}

const car1 = cloneCar(prototypeCar, {
  features: [...prototypeCar.features, "Sunroof"],
});

const car2 = cloneCar(prototypeCar, {
  model: "Hatchback",
});

console.log(car1); // { model: 'Sedan', features: [ 'Air Conditioning', 'ABS', 'Sunroof' ] }
console.log(car2); // { model: 'Hatchback', features: [ 'Air Conditioning', 'ABS' ] }
