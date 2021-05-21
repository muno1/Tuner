/** Stato iniziale dell'app */
const initialState = {
  note: {
    name: "A",
    octave: 4,
    frequency: 440,
  },
  tunerSwitch: false,
  inharmonicity: {
    Do1: 0,
    Do2: 0,
    Do3: 0,
    Do4: 0,
    Do5: 0,
  },
};

/** Reducer
 *  - Permette di cambiare lo stato dell'applicazione in base ad un'azione, definita da una stringa e un valore.
 *    Tramite lo switch case, eseguiamo l'azione corrispondente.
 */
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeNote":
      return { ...state, note: action.value };
    case "SWITCH":
      return { ...state, tunerSwitch: !state.tunerSwitch };

    case "changeInharmonicity":
      return { ...state, inharmonicity: action.value };
    default:
      return state;
  }
};

export default noteReducer;
