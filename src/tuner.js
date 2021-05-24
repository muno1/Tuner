import Recording from "react-native-recording";
import PitchFinder from "pitchfinder";
import { getNote, getCents, getNoteName } from "./noteFunctions";
export default class Tuner {
  middleA = 440; // Default value

  constructor(_middleA) {
    this.sampleRate = 22050;
    this.bufferSize = 2048;
    this.middleA = _middleA;
    this.pitchFinder = new PitchFinder.YIN({ sampleRate: this.sampleRate });
  }

  start() {
    Recording.init({
      sampleRate: this.sampleRate,
      bufferSize: this.bufferSize,
    });
    Recording.start();
    Recording.addRecordingEventListener((data) => {
      const frequency = this.pitchFinder(data);
      if (frequency && this.onNoteDetected) {
        const note = getNote(frequency, this.middleA);
        this.onNoteDetected({
          name: getNoteName(note),
          value: note,
          cents: getCents(frequency, note, this.middleA),
          octave: parseInt(note / 12) - 1,
          frequency: frequency,
        });
      }
    });
  }

  stop() {
    Recording.stop();
  }
}
