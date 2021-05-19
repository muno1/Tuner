import React, { Component, useState } from "react";
import Note from "../src/components/note";
import Meter from "../src/components/meter";
import { View, Text, StatusBar, Button, Switch } from "react-native";
/** Foglio di stile */
import style from "../styles/style";
import { connect } from "react-redux";

class TunerScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.body}>
        <StatusBar backgroundColor="#fff" translucent />
        <Meter style={style.meter} cents={this.props.note.cents} />
        <Note {...this.props.note} />
        <Text style={style.frequency}>
          {this.props.note.frequency.toFixed(1)} Hz
        </Text>
        <Switch
          style={{
            paddingTop: 50,
            transform: [{ scaleX: 2 }, { scaleY: 2 }],
          }}
          value={this.props.tunerSwitch}
          onValueChange={() => {
            // Se il tuner è attivo
            if (this.props.tunerSwitch) {
              // Si stoppa il tuner
              this.props.tuner.stop();
              // Dispatch per cambiare lo stato di tunerSwitch a true
              this.props.startAndStop();
            } else {
              // Se il tuner non è attivo
              // Parte il tuner
              this.props.tuner.start();
              // Dispatch per cambiare lo stato di tunerSwitch a true
              this.props.startAndStop();
            }
          }}
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
