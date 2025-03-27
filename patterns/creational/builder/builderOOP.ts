class Burger {
  public bun?: string;
  public patty?: string;
  public cheese?: boolean;
  public lettuce?: boolean;
  public tomato?: boolean;
  public sauce?: string;

  constructor(builder: BurgerBuilder) {
    this.bun = builder.bun;
    this.patty = builder.patty;
    this.cheese = builder.cheese;
    this.lettuce = builder.lettuce;
    this.tomato = builder.tomato;
    this.sauce = builder.sauce;
  }

  describe(): void {
    console.log(`🍔 Your Burger:
        - Bun: ${this.bun}
        - Patty: ${this.patty}
        - Cheese: ${this.cheese ? "Yes" : "No"}
        - Lettuce: ${this.lettuce ? "Yes" : "No"}
        - Tomato: ${this.tomato ? "Yes" : "No"}
        - Sauce: ${this.sauce}`);
  }
}

class BurgerBuilder {
  public bun?: string;
  public patty?: string;
  public cheese: boolean = false;
  public lettuce: boolean = false;
  public tomato: boolean = false;
  public sauce?: string;

  setBun(bun: string): BurgerBuilder {
    this.bun = bun;
    return this;
  }

  setPatty(patty: string): BurgerBuilder {
    this.patty = patty;
    return this;
  }

  addCheese(): BurgerBuilder {
    this.cheese = true;
    return this;
  }

  addLettuce(): BurgerBuilder {
    this.lettuce = true;
    return this;
  }

  addTomato(): BurgerBuilder {
    this.tomato = true;
    return this;
  }

  setSauce(sauce: string): BurgerBuilder {
    this.sauce = sauce;
    return this;
  }

  build(): Burger {
    return new Burger(this);
  }
}

const burger = new BurgerBuilder()
  .setBun("Sesame")
  .setPatty("Beef")
  .addCheese()
  .addLettuce()
  .setSauce("BBQ")
  .build();

burger.describe();
