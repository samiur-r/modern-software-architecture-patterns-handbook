type State = "playing" | "paused" | "stopped";

const transitions: Record<State, Record<string, State>> = {
  playing: {
    pause: "paused",
    stop: "stopped",
  },
  paused: {
    play: "playing",
    stop: "stopped",
  },
  stopped: {
    play: "playing",
  },
};

const createPlayer = () => {
  let state: State = "stopped";

  return {
    send: (event: string) => {
      const next = transitions[state][event];
      if (next) {
        console.log(`Transition: ${state} → ${next}`);
        state = next;
      } else {
        console.log(`Can't '${event}' while ${state}`);
      }
    },
    getState: () => state,
  };
};

// Usage
const player = createPlayer();
player.send("play"); // playing
player.send("pause"); // paused
player.send("stop"); // stopped
player.send("pause"); // Can't 'pause' while stopped
