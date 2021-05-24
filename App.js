/** React */
import React, { Component } from "react";
import { PermissionsAndroid } from "react-native";

/** Async Storage */
import AsyncStorage from "@react-native-async-storage/async-storage";
/** Redux */
import redux, { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

/** Reducers */
import noteReducer from "./src/reducers/noteReducer";
/** Navigation  */
import { NavigationContainer } from "@react-navigation/native";

/** Tabs */
import Tabs from "./screens/tabs";
/** Tuner class */
import Tuner from "./src/tuner";
import beatsCalc from "./src/beats";
import inharmonicityCalc from "./src/inharmonicity";

/** --------------- FINE IMPORTS ---------------- */

/** Redux Persist */
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["inharmonicity"],
};

const persistedReducer = persistReducer(persistConfig, noteReducer);

/** Creazione dello stato dell'app. */
const store = createStore(persistedReducer);
//const store = createStore(noteReducer);

const persistedStore = persistStore(store);
/** Creiamo l'oggetto Tuner */
//persistedStore.purge();
const tuner = new Tuner(store.getState().middleA);
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  /** Quando il componente viene montato */
  async componentDidMount() {
    /*  Android permissions request */
    if (Platform.OS === "android") {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
    }
    /** Il Tuner parte in modalita' OFF */
    store.dispatch({ type: "switchOff" });
    /** Dispatching actions to update state */
    tuner.onNoteDetected = (note) => {
      if (this._lastNoteName === note.name) {
        store.dispatch({ type: "changeNote", value: note });
      } else {
        this._lastNoteName = note.name;
      }
    };
  }
  handleSwitchTuner = () => {
    store.dispatch({ type: "SWITCH" });
    if (store.getState().tunerSwitch) tuner.start();
    else tuner.stop();
  };

  handleInharmonicitySave = (_inharmonicity) => {
    store.dispatch({ type: "changeInharmonicity", value: _inharmonicity });
  };
  /** Il provider contiene lo store e i componenti figli possono vederlo. */
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Tabs
            handleSwitch={this.handleSwitchTuner}
            beatsCalc={beatsCalc}
            inharmonicityCalc={inharmonicityCalc}
            inharmonicitySave={this.handleInharmonicitySave}
          />
        </Provider>
      </NavigationContainer>
    );
  }
}
