/** React */
import React, { Component, useState } from "react";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
/** Screens */
import TunerScreen from "./screens/tunerScreen";
import Inharmonicity from "./screens/inharmonicity";
import BeatsScreen from "./screens/beatsScreen";

/** Tuner class */
import Tuner from "./src/tuner";

import beatsCalc from "./src/beats";

/** --------------- FINE IMPORTS ---------------- */
/** Tab */
const Tab = createMaterialBottomTabNavigator();

/** Creazione dello stato dell'app. */
//let store = createStore(noteReducer);

/** Redux Persist */
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, noteReducer);
const store = createStore(persistedReducer);
/** Creiamo l'oggetto Tuner */
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
        children={() => (
          // Passiamo al TunerScreen il tuner come props.
          <BeatsScreen beatsCalc={beatsCalc} />
        )}
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
        children={() => (
          <Inharmonicity
            inharmonicityCalc={inharmonicityCalc}
            inharmonicitySave={inharmonicitySave}
          />
        )}
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

inharmonicityCalc = (stringInfo) => {
  console.log(stringInfo);
  return 0;
};

inharmonicitySave = () => {};
