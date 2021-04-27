import React, { Component} from 'react';
import Note from "./note";
import Meter from "./meter";
import Tuner from "./tuner";
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    PermissionsAndroid,
  } from "react-native";

  export default class tunerView extends Component{
    state = {
        note: {
          name: "A",
          octave: 4,
          frequency: 440,
        },
      };
      
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
    
      _update(note) {
        this.setState({ note });
      }

      render(){
          return(
            <View style={header.headerStyle}>
            <StatusBar backgroundColor="#fff" translucent />
            <Meter cents={this.state.note.cents} />
            <Note {...this.state.note} />
            <Text style={header.frequency}>
              {this.state.note.frequency.toFixed(1)} Hz
            </Text>
          </View>
          );
      }


}

export const header = {
    // background
    headerStyle: {
      backgroundColor: "black",
      flex :1,
      justifyContent: "center",
      alignItems: "center"
    },
    frequency: {
        fontSize: 28,
        color: "#37474f",
      },
  }