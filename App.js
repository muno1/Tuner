import React, {Component,useState } from "react";
import redux, { createStore } from "redux";
import {
  View,
  Button,
  Text,
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
  NavigatorIOS,
} from "react-native";
/** Foglio di stile */
import style from "./styles/style";

import TunerScreen from "./screens/tunerScreen";
import Inharmonicity from "./screens/inharmonicity";
import BeatsScreen from "./screens/beatsScreen";

import { Provider } from "react-redux";
import TabScreen from "./screens/tabScreen"
import Tuner from "./src/tuner";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";



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
function MyTabs() {
  return (
    
    <Tab.Navigator activeColor="#000" barStyle={{ backgroundColor: "white" }}>
     <Tab.Screen
      name="Tuner"
        component={TunerScreen}
         options={{
           tabBarLabel: "Home",
           tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name="home" color="black" size={26} />
           ),
         }}
       />

       <Tab.Screen
         name="Beats"
         component={BeatsScreen}
         options={{
           tabBarLabel: "Beats",
           tabBarIcon: ({ color }) => (
             <MaterialCommunityIcons name="blur-radial" color="black" size={26} />
          ),
         }}
       />

       <Tab.Screen
         name="Disarmonicita'"
         component={Inharmonicity}
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
export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {showTuner: false}
  }
  
  
  /** Quando il componente viene montato */
  async componentDidMount() {
    /*  Permessi di registrazione android */
    if (Platform.OS === "android") {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
    }
  }

  componentDidUpdate(){
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

  //Stop registrazione
  _stop(){
    tuner.stop();
  }
  /** Con il dispatch mandiamo il comando di cambiare lo stato. */
  _update(note) {
    store.dispatch({ type: "changeNote", value: note });
  }

  _onPress=()=>{
    this.setState({showTuner:!this.state.showTuner})
  }

  /** Il provider contiene lo store e i componenti figli possono vederlo. */
  render() {


    return (
  
          <NavigationContainer>
                        <TouchableOpacity
                        style={style.button}
                        onPress={this._onPress}>
                          <Text>
                            Start
                          </Text>
                        </TouchableOpacity>              

             {this.state.showTuner &&<Content/>}
            
           </NavigationContainer>
    );
  }
}

export class Content extends Component{
  render()
  {
    return( 
             <Provider store={store}>
                
                <MyTabs/> 
              
              </Provider>    
    );
  }
}


