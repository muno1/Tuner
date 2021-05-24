import React from "react";

/** Screens */
import TunerScreen from "./tunerScreen";
import Inharmonicity from "./inharmonicityScreen";
import BeatsScreen from "./beatsScreen";
/** Navigation */
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
/** React Native Screens */
import { enableScreens } from "react-native-screens";

enableScreens(true);
/** Tab */
const Tab = createMaterialBottomTabNavigator();
/*  Tabs of screen */
export default Tabs = ({
  handleSwitch,
  beatsCalc,
  inharmonicityCalc,
  inharmonicitySave,
}) => {
  return (
    /**
     *
     *  @param detachInactiveScreen : Salva memoria disattivando lo screen non attivo.
     */
    <Tab.Navigator
      activeColor="#000"
      barStyle={{ backgroundColor: "white" }}
      detachInactiveScreens
    >
      <Tab.Screen
        name="Tuner"
        children={(props) => <TunerScreen switchTuner={handleSwitch} />}
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
};
