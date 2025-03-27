// Subsystems
class TV {
  turnOn() {
    console.log("TV turned ON");
  }
  setInput(source: string) {
    console.log(`TV input set to ${source}`);
  }
}

class SoundSystem {
  turnOn() {
    console.log("Sound system turned ON");
  }
  setVolume(level: number) {
    console.log(`Volume set to ${level}`);
  }
}

class StreamingDevice {
  connect() {
    console.log("Streaming device connected");
  }
  playMovie(title: string) {
    console.log(`Playing movie: ${title}`);
  }
}

// Facade
class HomeTheaterFacade {
  private tv = new TV();
  private soundSystem = new SoundSystem();
  private streamer = new StreamingDevice();

  watchMovie(title: string) {
    this.tv.turnOn();
    this.tv.setInput("HDMI");
    this.soundSystem.turnOn();
    this.soundSystem.setVolume(20);
    this.streamer.connect();
    this.streamer.playMovie(title);
  }

  endMovie() {
    console.log("Shutting down home theater...");
  }
}

// Client
const homeTheater = new HomeTheaterFacade();
homeTheater.watchMovie("Inception");
