type Burger = {
  bun?: string;
  patty?: string;
  cheese?: boolean;
  lettuce?: boolean;
  tomato?: boolean;
  sauce?: string;
};

const createBurgerBuilder = () => {
  const burger: Burger = {};

  const builder = {
    setBun: (bun: string) => {
      burger.bun = bun;
      return builder;
    },
    setPatty: (patty: string) => {
      burger.patty = patty;
      return builder;
    },
    addCheese: () => {
      burger.cheese = true;
      return builder;
    },
    addLettuce: () => {
      burger.lettuce = true;
      return builder;
    },
    addTomato: () => {
      burger.tomato = true;
      return builder;
    },
    setSauce: (sauce: string) => {
      burger.sauce = sauce;
      return builder;
    },
    build: (): Burger => {
      return { ...burger }; // return a copy to maintain immutability
    },
  };

  return builder;
};

const myBurger = createBurgerBuilder()
  .setBun("Brioche")
  .setPatty("Chicken")
  .addCheese()
  .addLettuce()
  .setSauce("Honey Mustard")
  .build();

console.log("Your Burger:", myBurger);
