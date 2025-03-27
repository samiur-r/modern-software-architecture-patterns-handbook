type FormMediator = {
  notify: (sender: string, event: string) => void;
};

const createCheckbox = (mediator: FormMediator) => {
  let checked = false;

  return {
    toggle: () => {
      checked = !checked;
      console.log(`🔘 Checkbox is now ${checked ? "checked" : "unchecked"}`);
      mediator.notify("checkbox", "toggle");
    },
    isChecked: () => checked,
  };
};

const createTextInput = () => {
  let visible = false;

  return {
    show: () => {
      visible = true;
      console.log("📝 Text input is visible");
    },
    hide: () => {
      visible = false;
      console.log("📝 Text input is hidden");
    },
  };
};

const createSubmitButton = () => {
  let enabled = false;

  return {
    enable: () => {
      enabled = true;
      console.log("✅ Submit button is enabled");
    },
    disable: () => {
      enabled = false;
      console.log("🚫 Submit button is disabled");
    },
  };
};

// Set up the system with a central mediator
const setupForm = () => {
  const state = {
    checkbox: undefined as ReturnType<typeof createCheckbox> | undefined,
    input: undefined as ReturnType<typeof createTextInput> | undefined,
    submit: undefined as ReturnType<typeof createSubmitButton> | undefined,
  };

  const mediator: FormMediator = {
    notify: (sender, event) => {
      if (sender === "checkbox" && event === "toggle") {
        if (state.checkbox?.isChecked()) {
          state.input?.show();
          state.submit?.enable();
        } else {
          state.input?.hide();
          state.submit?.disable();
        }
      }
    },
  };

  const checkbox = createCheckbox(mediator);
  const input = createTextInput();
  const submit = createSubmitButton();

  state.checkbox = checkbox;
  state.input = input;
  state.submit = submit;

  return { checkbox };
};

// ✅ Usage
const { checkbox } = setupForm();

checkbox.toggle(); // check ✅
checkbox.toggle(); // uncheck ❌
