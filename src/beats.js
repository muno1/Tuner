/**
 * RatioChoosen
 * 0 : Terza
 * 2 : Quarta
 * 2 : Quinta
 * 3 : Ottava
 * 4 : Prima
 */

beatsCalc = (_firstNote, _secondNote, _ratioChoosen) => {
  let ratio = [0, 0];
  let beats = 0;

  switch (_ratioChoosen) {
    case 0:
      ratio = [5, 4];
      break;
    case 1:
      ratio = [4, 3];
      break;
    case 2:
      ratio = [3, 2];
      break;
    case 3:
      ratio = [2, 1];
      break;
    case 4:
      ratio = [1, 1];
      break;

    default:
      ratio = [1, 1];
  }

  beats =
    Math.max(_firstNote.frequency, _secondNote.frequency) * ratio[0] -
    Math.min(_secondNote.frequency, _firstNote.frequency) * ratio[1];
  return Math.abs(beats.toFixed(2));
};

export default beatsCalc;
