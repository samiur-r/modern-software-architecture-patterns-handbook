// Base Component
interface Text {
  render(): string;
}

// Concrete Component
class PlainText implements Text {
  constructor(private content: string) {}
  render(): string {
    return this.content;
  }
}

// Decorator Base Class
abstract class TextDecorator implements Text {
  constructor(protected component: Text) {}
  abstract render(): string;
}

// Concrete Decorators
class BoldDecorator extends TextDecorator {
  render(): string {
    return `<b>${this.component.render()}</b>`;
  }
}

class ItalicDecorator extends TextDecorator {
  render(): string {
    return `<i>${this.component.render()}</i>`;
  }
}

class UnderlineDecorator extends TextDecorator {
  render(): string {
    return `<u>${this.component.render()}</u>`;
  }
}

// Usage
const text = new PlainText("Hello, world!");
const decorated = new UnderlineDecorator(
  new ItalicDecorator(new BoldDecorator(text))
);
console.log(decorated.render());
// Output: <u><i><b>Hello, world!</b></i></u>
