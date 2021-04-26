import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; 
import Note from "./screens/note";
import Meter from "./screens/meter";
import Tuner from "./screens/tuner";
import Inharmonicity from "./screens/inharmonicity"
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Text>shiu</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MyTabs() {
  return (
    
        
        <Tab.Navigator 
        initialRouteName="Home"
        activeColor="#fff"
        barStyle={{ backgroundColor: 'blue' }}
      >

        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />

        <Tab.Screen
            name="Settings"
            component={Inharmonicity}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="dots-horizontal-circle" color={color} size={26} />
              ),
            }}
    />

    </Tab.Navigator>
  );
}
export default class App extends Component {
 
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

  render() {
    return (
      
        <NavigationContainer>
          <View style={style.body}>
        <StatusBar backgroundColor="#000" translucent />
        <Meter cents={this.state.note.cents} />
        <Note {...this.state.note} />
        <Text style={style.frequency}>
          {this.state.note.frequency.toFixed(1)} Hz
        </Text>
      </View>
         <MyTabs/>

        </NavigationContainer>
        

       
    );
  }
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"purple",
    
  },
  frequency: {
    fontSize: 28,
    color: "#37474f",
  },
});

