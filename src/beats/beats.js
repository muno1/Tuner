/**
 * RatioChoosen
 * 0 : Terza
 * 2 : Quarta
 * 2 : Quinta
 * 3 : Ottava
 * 4 : Prima
 */
export class BeatsCalculator {
  calculate(firstNote, secondNote, ratioChoosen) {
    let ratio = [0, 0];
    let beats = 0;

    switch (ratioChoosen) {
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
      Math.min(firstNote.frequency, secondNote.frequency) * ratio[0] -
      Math.max(firstNote.frequency, secondNote.frequency) * ratio[1];
    return beats;
  }
}
