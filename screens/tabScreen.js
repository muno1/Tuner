import React from "react";
import {NavigationContainer} from "react-navigation";


const Tabs =() =>(
    <NavigationContainer>
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
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dots-horizontal-circle" color={color} size={26} />
          ),
        }}
/>


</Tab.Navigator>
</NavigationContainer>

);
export default Tabs;