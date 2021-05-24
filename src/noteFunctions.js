const noteStrings = [
  "C",
  "C♯",
  "D",
  "D♯",
  "E",
  "F",
  "F♯",
  "G",
  "G♯",
  "A",
  "A♯",
  "B",
];
let semitone = 69;

/**
 * get musical note from frequency
 *
 */
export function getNote(_frequency, _middleA) {
  const note = 12 * (Math.log(_frequency / _middleA) / Math.log(2));
  return Math.round(note) + semitone;
}

/**
 * get the musical note's standard frequency
 *
 */
export function getStandardFrequency(_note, _middleA) {
  return _middleA * Math.pow(2, (_note - semitone) / 12);
}

/**
 * get cents difference between given frequency and musical note's standard frequency
 *
 */
export function getCents(_frequency, _note, _middleA) {
  return Math.floor(
    (1200 * Math.log(_frequency / getStandardFrequency(_note, _middleA))) /
      Math.log(2)
  );
}

export function getNoteName(_note) {
  return noteStrings[_note % 12];
}
