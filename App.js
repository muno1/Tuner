import React, { Component, useState } from "react";
import redux, { createStore } from "redux";
import { PermissionsAndroid } from "react-native";

import TunerScreen from "./screens/tunerScreen";
import Inharmonicity from "./screens/inharmonicity";
import BeatsScreen from "./screens/beatsScreen";

import { Provider } from "react-redux";
import Tuner from "./src/tuner";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();

/** Stato iniziale dell'app */
const initialState = {
  note: {
    name: "A",
    octave: 4,
    frequency: 440,
  },
  tunerSwitch: false,
};

/** Reducer
 *  - Permette di cambiare lo stato dell'applicazione in base ad un'azione, definita da una stringa e un valore.
 *    Tramite lo switch case, eseguiamo l'azione corrispondente.
 */
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeNote":
      return { ...state, note: action.value };
    // Stato del tuner (avviato o no)
    case "SWITCH":
      return { ...state, tunerSwitch: !state.tunerSwitch };

    default:
      return state;
  }
};

/** Creazione dello stato dell'app. */
let store = createStore(noteReducer);

/*  Tabs of screen */
function MyTabs() {
  return (
    <Tab.Navigator activeColor="#000" barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Tuner"
        children={() => (
          // Passiamo al TunerScreen il tuner come props.
          <TunerScreen tuner={tuner} />
        )}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color="black" size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Beats"
        component={BeatsScreen}
        options={{
          tabBarLabel: "Beats",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="blur-radial"
              color="black"
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Disarmonicita'"
        component={Inharmonicity}
        options={{
          tabBarLabel: "Parameters",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color="black" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const tuner = new Tuner();
export default class App extends Component {
  /** Quando il componente viene montato */
  async componentDidMount() {
    /*  Permessi di registrazione android */
    if (Platform.OS === "android") {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
    }
    /** Nuova istanza di Tuner */

    /** Con il dispatch mandiamo il comando di cambiare lo stato. */
    tuner.onNoteDetected = (note) => {
      if (this._lastNoteName === note.name) {
        store.dispatch({ type: "changeNote", value: note });
      } else {
        this._lastNoteName = note.name;
      }
    };
  }

  /** Il provider contiene lo store e i componenti figli possono vederlo. */
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <MyTabs />
        </Provider>
      </NavigationContainer>
    );
  }
}
