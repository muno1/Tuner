import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";





function Tabs  (){
  return (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: "blue" }}
    >
      <Tab.Screen
        name="Home"
        component={TunerScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={BeatsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="dots-horizontal-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>);
} 
export default Tabs;
