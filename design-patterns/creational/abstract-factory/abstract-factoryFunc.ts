type Button = { render: () => void };
type Checkbox = { render: () => void };

// Concrete Product Creators
const createLightButton = (): Button => ({
  render: () => console.log("Rendering light-themed button"),
});

const createDarkButton = (): Button => ({
  render: () => console.log("Rendering dark-themed button"),
});

const createLightCheckbox = (): Checkbox => ({
  render: () => console.log("Rendering light-themed checkbox"),
});

const createDarkCheckbox = (): Checkbox => ({
  render: () => console.log("Rendering dark-themed checkbox"),
});

// Abstract Factory Function Type
type UIFactory = {
  createButton: () => Button;
  createCheckbox: () => Checkbox;
};

// Concrete Factory Functions
const LightThemeFactory: UIFactory = {
  createButton: createLightButton,
  createCheckbox: createLightCheckbox,
};

const DarkThemeFactory: UIFactory = {
  createButton: createDarkButton,
  createCheckbox: createDarkCheckbox,
};

// Client Function
function renderUI(factory: UIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  button.render();
  checkbox.render();
}

// Usage
const themeFactory = Math.random() > 0.5 ? LightThemeFactory : DarkThemeFactory;
renderUI(themeFactory);
