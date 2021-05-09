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

class TunerScreen extends Component {
  render() {
    return (
      <View style={style.body}>
        <StatusBar backgroundColor="#fff" translucent />
        <Meter style={style.meter} cents={this.props.note.cents} />
        <Note {...this.props.note} />
        <Text style={style.frequency}>
          {this.props.note.frequency.toFixed(1)} Hz
        </Text>
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
