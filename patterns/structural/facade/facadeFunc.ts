// Subsystems as pure functions
const turnOnTV = () => console.log("TV turned ON");
const setTVInput = (source: string) => console.log(`TV input set to ${source}`);

const turnOnSoundSystem = () => console.log("Sound system turned ON");
const setVolume = (level: number) => console.log(`Volume set to ${level}`);

const connectStreamer = () => console.log("Streaming device connected");
const playMovie = (title: string) => console.log(`Playing movie: ${title}`);

// Facade function
const watchMovie = (title: string) => {
  turnOnTV();
  setTVInput("HDMI");
  turnOnSoundSystem();
  setVolume(20);
  connectStreamer();
  playMovie(title);
};

// Client
watchMovie("Inception");
