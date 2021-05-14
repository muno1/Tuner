import React, { Component, useState } from "react";
import Note from "../src/components/note";
import Meter from "../src/components/meter";
import NoteView from "../src/components/noteView";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
} from "react-native";
/** Foglio di stile */
import style from "../styles/style";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

class TunerScreen extends Component {
 
constructor(props){
    super(props)
    this.state = {showTuner: false}
  }  

  _onPress=()=>{
    this.setState({showTuner:!this.state.showTuner})
  }


  render() {
    return (
      <View>
         <TouchableOpacity
                        style={style.button}
                        onPress={this._onPress}>
                          <Text>
                            Start
                          </Text>
                        </TouchableOpacity>              
      
        {this.state.showTuner &&
        <View >
        <StatusBar backgroundColor="#fff" translucent />
        <Meter style={style.meter} cents={this.props.note.cents} />
        <Note {...this.props.note} />
        <Text style={style.frequency}>
          {this.props.note.frequency.toFixed(1)} Hz
        </Text>
      </View>}
      
           
      </View>
    );

        
  }
}

/** Mappa lo stato (store) con le props, cosi' da poterle usare nel componente. */
const mapStateToProps = (state) => {
  const { note } = state;
  return { note };
};

export default connect(mapStateToProps)(TunerScreen);