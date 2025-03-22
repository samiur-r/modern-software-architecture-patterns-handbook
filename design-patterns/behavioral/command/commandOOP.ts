// Receiver
class Light {
  turnOn() {
    console.log("💡 Light is ON");
  }
  turnOff() {
    console.log("💡 Light is OFF");
  }
}

// Command interface
interface Command {
  execute(): void;
  undo(): void;
}

// Concrete Commands
class TurnOnLight implements Command {
  constructor(private light: Light) {}
  execute() {
    this.light.turnOn();
  }
  undo() {
    this.light.turnOff();
  }
}

class TurnOffLight implements Command {
  constructor(private light: Light) {}
  execute() {
    this.light.turnOff();
  }
  undo() {
    this.light.turnOn();
  }
}

// Invoker
class RemoteControl {
  private history: Command[] = [];

  executeCommand(command: Command) {
    command.execute();
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

// Usage
const light = new Light();
const remote = new RemoteControl();

const onCmd = new TurnOnLight(light);
const offCmd = new TurnOffLight(light);

remote.executeCommand(onCmd); // 💡 Light is ON
remote.executeCommand(offCmd); // 💡 Light is OFF
remote.undo(); // 💡 Light is ON
