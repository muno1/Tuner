/** Stato iniziale dell'app */
const initialState = {
  note: {
    name: "A",
    value: 69,
    octave: 4,
    frequency: 440,
  },
  middleA: 440,
  tunerSwitch: false,
  inharmonicity: [0, 0, 0, 0, 0, 0, 0, 0],
};

/** Reducer
 *  - Permette di cambiare lo stato dell'applicazione in base ad un'azione, definita da una stringa e un valore.
 *    Tramite lo switch case, eseguiamo l'azione corrispondente.
 */
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeNote":
      return { ...state, note: action.value };
    case "resetNote":
      return { ...state, note: { frequency: 440, name: A, octave: 4 } };
    case "SWITCH":
      return { ...state, tunerSwitch: !state.tunerSwitch };
    case "switchOn":
      return { ...state, tunerSwitch: true };
    case "switchOff":
      return { ...state, tunerSwitch: false };
    case "changeInharmonicity":
      return { ...state, inharmonicity: action.value };
    default:
      return state;
  }
};

export default noteReducer;
