interface Button {
  render(): void;
}

interface Checkbox {
  render(): void;
}

// Concrete Products - Light Theme
class LightButton implements Button {
  render() {
    console.log("Rendering light-themed button");
  }
}

class LightCheckbox implements Checkbox {
  render() {
    console.log("Rendering light-themed checkbox");
  }
}

// Concrete Products - Dark Theme
class DarkButton implements Button {
  render() {
    console.log("Rendering dark-themed button");
  }
}

class DarkCheckbox implements Checkbox {
  render() {
    console.log("Rendering dark-themed checkbox");
  }
}

// Abstract Factory Interface
interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Concrete Factories
class LightThemeFactory implements UIFactory {
  createButton(): Button {
    return new LightButton();
  }

  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
}

class DarkThemeFactory implements UIFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }
}

// Client Code
function renderUI(factory: UIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  button.render();
  checkbox.render();
}

// Usage
const themeFactory: UIFactory = new DarkThemeFactory();
renderUI(themeFactory);
