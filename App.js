import React , {Component} from 'react';
import { Button, Text, View,PermissionsAndroid,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import style from "./styles/style";

import Tuner from "./tuner";
import Note from "./note";
import Meter from "./meter";

function HomeScreen({ navigation }) {
  return (
    <View style={style.body}>
      <Text>Giulia!</Text>
    </View>
  );
}

function SettingsScreen({ navigation }, ciao) {
  return (
    <View style={style.body}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
class TunerApp {
  state = {
    note: {
      name: "A",
      octave: 4,
      frequency: 440,
    },
  };

  _update(note) {
    this.setState({ note });
  }

  async componentDidMount() {
    if (Platform.OS === "android") {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
    }

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
}

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
    
    <Tab.Screen name="Giulia" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

;