import React, { Component } from "react";
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
import TunerScreen from "./screens/tunerScreen";
import Inharmonicity from "./screens/inharmonicity";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BeatsScreen from "./screens/beatsScreen";

import Tuner from "./src/tuner";
import Meter from "./src/components/meter";
import Note from "./src/components/note";
const Tab = createMaterialBottomTabNavigator();

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
  /** Stato dell'App (nota) */
  state = {
    note: {
      name: "A",
      octave: 4,
      frequency: 440,
    },
  };

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

  _update(note) {
    this.setState({ note });
  }

  render() {
    return (
      <View style={style.headerStyle}>
        <TunerScreen note={this.state.note} />
      </View>
      // <NavigationContainer>
      //   <MyTabs />
      // </NavigationContainer>
    );
  }
}
