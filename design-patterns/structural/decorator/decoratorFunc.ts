type TextRenderer = (content: string) => string;

const bold: TextRenderer = (text) => `<b>${text}</b>`;
const italic: TextRenderer = (text) => `<i>${text}</i>`;
const underline: TextRenderer = (text) => `<u>${text}</u>`;

// Compose decorators
const applyDecorators =
  (...decorators: TextRenderer[]) =>
  (text: string) =>
    decorators.reduce((acc, fn) => fn(acc), text);

// Usage
const render = applyDecorators(bold, italic, underline);
console.log(render("Hello, world!"));
// Output: <u><i><b>Hello, world!</b></i></u>
