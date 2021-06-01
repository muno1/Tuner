import React from "react";
import { StyleSheet } from "react-native";

/** Screens */
import TunerScreen from "./tunerScreen";
import Inharmonicity from "./inharmonicityScreen";
import BeatsScreen from "./beatsScreen";
/** Navigation */
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
/** React Native Screens */
import { enableScreens } from "react-native-screens";

enableScreens(true);
/** Tab */
const Tab = createBottomTabNavigator();
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
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 10,
          left: 70,
          right: 70,
          elevation: 0,
          backgroundColor: "#E76F51",
          borderRadius: 15,
          height: 50,
          ...styles.shadow,
        },
      }}
      detachInactiveScreens
    >
      <Tab.Screen
        name="Tuner"
        children={(props) => <TunerScreen switchTuner={handleSwitch} />}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color="white" size={26} />
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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="blur-radial"
              color="white"
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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color="white" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#292929",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 5,
  },
});
