interface FormMediator {
  notify(sender: UIComponent, event: string): void;
}

// Abstract UI Component
abstract class UIComponent {
  constructor(protected mediator?: FormMediator) {}

  setMediator(mediator: FormMediator) {
    this.mediator = mediator;
  }
}

// Concrete Components
class Checkbox extends UIComponent {
  private checked = false;

  toggle() {
    this.checked = !this.checked;
    console.log(`🔘 Checkbox is now ${this.checked ? "checked" : "unchecked"}`);
    this.mediator?.notify(this, "toggle");
  }

  isChecked(): boolean {
    return this.checked;
  }
}

class TextInput extends UIComponent {
  private visible = false;

  show() {
    this.visible = true;
    console.log("📝 Text input is visible");
  }

  hide() {
    this.visible = false;
    console.log("📝 Text input is hidden");
  }
}

class SubmitButton extends UIComponent {
  private enabled = false;

  enable() {
    this.enabled = true;
    console.log("✅ Submit button is enabled");
  }

  disable() {
    this.enabled = false;
    console.log("🚫 Submit button is disabled");
  }
}

// Mediator Implementation
class FormController implements FormMediator {
  constructor(
    private checkbox: Checkbox,
    private input: TextInput,
    private submit: SubmitButton
  ) {
    checkbox.setMediator(this);
    input.setMediator(this);
    submit.setMediator(this);
  }

  notify(sender: UIComponent, event: string): void {
    if (sender instanceof Checkbox && event === "toggle") {
      if (sender.isChecked()) {
        this.input.show();
        this.submit.enable();
      } else {
        this.input.hide();
        this.submit.disable();
      }
    }
  }
}

// Usage
const checkbox = new Checkbox();
const textInput = new TextInput();
const submitButton = new SubmitButton();

const controller = new FormController(checkbox, textInput, submitButton);

checkbox.toggle(); // check it ✅
checkbox.toggle(); // uncheck it ❌
