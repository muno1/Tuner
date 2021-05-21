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

/** Redux Persist */
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, noteReducer);

/** Creazione dello stato dell'app. */
const store = createStore(persistedReducer);

const persistedStore = persistStore(store);
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
    console.log(store.getState());
    return (
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistedStore}>
            <MyTabs />
          </PersistGate>
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

inharmonicityCalc = (stringInfo, octave) => {
  console.log(stringInfo);
  let inharmonicity = 0;
  inharmonicity =
    (Math.pow(stringInfo.diameter, 2) /
      Math.pow(stringInfo.vibrantPart, 4) /
      Math.pow(stringInfo.frequency, 2)) *
    stringInfo.elasticityConst;
  return inharmonicity;
};

inharmonicitySave = (_inharmonicity) => {
  store.dispatch({ type: "changeInharmonicity", value: _inharmonicity });
};

// 0,00308641975308641975308641975309
