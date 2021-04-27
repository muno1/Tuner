import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
} from "react-native";

import style from "./styles/style";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import TunerView from "./screens/tunerView";
import Inharmonicity from "./screens/inharmonicity";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BeatsScreen from "./screens/beatsScreen";
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator activeColor="#fff" barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Home"
        component={TunerView}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color="red" size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Beats"
        component={BeatsScreen}
        options={{
          tabBarLabel: "Beats",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="blur-radial" color="red" size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Inharmonicity}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color="red" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }
}
