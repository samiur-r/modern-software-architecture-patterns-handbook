type Command = {
  execute: () => void;
  undo: () => void;
};

const createLight = () => {
  let isOn = false;
  return {
    turnOn: () => {
      isOn = true;
      console.log("💡 Light is ON");
    },
    turnOff: () => {
      isOn = false;
      console.log("💡 Light is OFF");
    },
    getState: () => isOn,
  };
};

const createTurnOnLight = (light: ReturnType<typeof createLight>): Command => ({
  execute: () => light.turnOn(),
  undo: () => light.turnOff(),
});

const createTurnOffLight = (
  light: ReturnType<typeof createLight>
): Command => ({
  execute: () => light.turnOff(),
  undo: () => light.turnOn(),
});

// Usage
const light = createLight();
const onCmd = createTurnOnLight(light);
const offCmd = createTurnOffLight(light);

const history: Command[] = [];

onCmd.execute(); // 💡 Light is ON
history.push(onCmd);

offCmd.execute(); // 💡 Light is OFF
history.push(offCmd);

// Undo last
history.pop()?.undo(); // 💡 Light is ON
