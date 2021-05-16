import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Note from "../src/components/note";
import { connect } from "react-redux";
import style from "../styles/style";
let beatsNum = 0;
class BeatsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ flex: 3 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Note {...this.props.note} />
              <Text style={style.frequency}>
                {this.props.note.frequency.toFixed(1)} Hz
              </Text>
              <Button title="OK" />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Note {...this.props.note} />
              <Text style={style.frequency}>
                {this.props.note.frequency.toFixed(1)} Hz
              </Text>
              <Button title="OK" />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>Battimenti: </Text>
          <Text style={{ fontSize: 80, paddingTop: 1 }}>{beatsNum}</Text>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(BeatsScreen);
