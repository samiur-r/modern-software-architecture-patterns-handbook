interface PlayerState {
  play(): void;
  pause(): void;
  stop(): void;
}

class PlayingState implements PlayerState {
  constructor(private player: MediaPlayer) {}
  play() {
    console.log("Already playing.");
  }
  pause() {
    console.log("Paused.");
    this.player.setState(this.player.pausedState);
  }
  stop() {
    console.log("Stopped.");
    this.player.setState(this.player.stoppedState);
  }
}

class PausedState implements PlayerState {
  constructor(private player: MediaPlayer) {}
  play() {
    console.log("Resumed playing.");
    this.player.setState(this.player.playingState);
  }
  pause() {
    console.log("Already paused.");
  }
  stop() {
    console.log("Stopped from paused.");
    this.player.setState(this.player.stoppedState);
  }
}

class StoppedState implements PlayerState {
  constructor(private player: MediaPlayer) {}
  play() {
    console.log("Started playing.");
    this.player.setState(this.player.playingState);
  }
  pause() {
    console.log("Can't pause. Not playing.");
  }
  stop() {
    console.log("Already stopped.");
  }
}

class MediaPlayer {
  playingState: PlayerState;
  pausedState: PlayerState;
  stoppedState: PlayerState;

  private state: PlayerState;

  constructor() {
    this.playingState = new PlayingState(this);
    this.pausedState = new PausedState(this);
    this.stoppedState = new StoppedState(this);
    this.state = this.stoppedState;
  }

  setState(state: PlayerState) {
    this.state = state;
  }

  play() {
    this.state.play();
  }

  pause() {
    this.state.pause();
  }

  stop() {
    this.state.stop();
  }
}

// Usage
const player = new MediaPlayer();

player.play(); // Started playing.
player.pause(); // Paused.
player.stop(); // Stopped.
player.stop(); // Already stopped.
