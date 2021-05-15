import React, { Component, useState } from "react";
import Note from "../src/components/note";
import Meter from "../src/components/meter";
import { View, Text, StatusBar, Button } from "react-native";
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
        <Text>{this.props.tunerSwitch}</Text>
        <Button
          style={style.btn}
          onPress={() => this.props.startAndStop()}
          title="Start"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

/** Mappa lo stato (store) con le props, cosi' da poterle usare nel componente. */
const mapStateToProps = (state) => {
  const { note } = state;
  const { tunerSwitch } = state;
  return { note, tunerSwitch };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startAndStop: () => dispatch({ type: "SWITCH" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TunerScreen);
