import React, { Component } from "react";
import redux, { createStore } from "redux";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
} from "react-native";
/** Foglio di stile */
import style from "./styles/style";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import TunerScreen from "./screens/TunerScreen";
import Inharmonicity from "./screens/inharmonicity";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BeatsScreen from "./screens/beatsScreen";
import { Provider } from "react-redux";

import Tuner from "./src/tuner";
const Tab = createMaterialBottomTabNavigator();

/** Stato iniziale dell'app */
const initialState = {
  note: {
    name: "A",
    octave: 4,
    frequency: 440,
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
    default:
      return state;
  }
};

/** Creazione dello stato dell'app. */
let store = createStore(noteReducer);

/*  Tabs of screen */
// function MyTabs() {
//   return (
//     <Tab.Navigator activeColor="#fff" barStyle={{ backgroundColor: "white" }}>
//       <Tab.Screen
//         name="Tuner"
//         component={tunerScreen}
//         options={{
//           tabBarLabel: "Tuner",
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color="red" size={26} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Beats"
//         component={BeatsScreen}
//         options={{
//           tabBarLabel: "Beats",
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="blur-radial" color="red" size={26} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Disarmonicita'"
//         component={Inharmonicity}
//         options={{
//           tabBarLabel: "Disarmonicita'",
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="cog" color="red" size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
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
    const tuner = new Tuner();
    tuner.start();
    tuner.onNoteDetected = (note) => {
      if (this._lastNoteName === note.name) {
        this._update(note);
      } else {
        this._lastNoteName = note.name;
      }
    };
  }

  /** Con il dispatch mandiamo il comando di cambiare lo stato. */
  _update(note) {
    store.dispatch({ type: "changeNote", value: note });
  }

  /** Il provider contiene lo store e i componenti figli possono vederlo. */
  render() {
    return (
      <View style={style.headerStyle}>
        <Provider store={store}>
          <TunerScreen />
        </Provider>
      </View>

      // <NavigationContainer>
      //   <MyTabs />
      // </NavigationContainer>
    );
  }
}
