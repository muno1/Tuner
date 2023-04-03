import React, { Component, useState } from "react";
import { View, Text, Button, Switch } from "react-native";
import Note from "../src/components/note";
import { connect } from "react-redux";
import style from "../styles/style";
import WheelPicker from "@victorzimnikov/react-native-wheel-picker-android";

class BeatsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beats: 0,
      // Prima nota
      firstNote: { name: "A", octave: 4, frequency: 440, selected: false },
      firstNoteSelected: false,
      secondNoteSelected: false,
      // Seconda nota
      secondNote: { name: "A", octave: 4, frequency: 440, selected: false },
      // Elemento selezionato dal picker
      selectedItem: 0,
      // Elementi del picker
      itemList: ["Terza", "Quarta", "Quinta", "Ottava", "Prima"],
    };
  }
  beatsUpdate = () => {
    this.state.beats = beatsCalc(
      this.state.firstNote,
      this.state.secondNote,
      this.state.selectedItem
    );
  };

  render() {
    let flag = true;
    if (flag) {
      if (!this.state.firstNoteSelected) this.state.firstNote = this.props.note;
      if (!this.state.secondNoteSelected)
        this.state.secondNote = this.props.note;

      this.beatsUpdate();
      return (
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Note {...this.state.firstNote} />
                <Text style={style.frequency}>
                  {this.state.firstNote.frequency.toFixed(1)} Hz
                </Text>

                <Switch
                  style={{
                    paddingTop: 50,
                    transform: [{ scaleX: 2 }, { scaleY: 2 }],
                  }}
                  value={this.state.firstNoteSelected}
                  onValueChange={() => {
                    // Se la nota è stata selezionata
                    this.state.firstNoteSelected =
                      !this.state.firstNoteSelected;
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Note {...this.state.secondNote} />
                <Text style={style.frequency}>
                  {this.state.secondNote.frequency.toFixed(1)} Hz
                </Text>
                <Switch
                  style={{
                    paddingTop: 50,
                    transform: [{ scaleX: 2 }, { scaleY: 2 }],
                  }}
                  value={this.state.secondNoteSelected}
                  onValueChange={() => {
                    // Se la nota è stata selezionata
                    this.state.secondNoteSelected =
                      !this.state.secondNoteSelected;
                  }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <WheelPicker
              selectedValue={this.state.selectedItem}
              onItemSelected={(selectedItem) => {
                this.state.selectedItem = index;
                this.beatsUpdate();
              }}
              data={this.state.itemList.map((value, i) => value)}
            />
            <Text style={{ fontSize: 18 }}>Battimenti: </Text>
            <Text style={{ fontSize: 80, paddingTop: 1 }}>
              {this.state.beats}
            </Text>
          </View>
        </View>
      );
    } else {
      return <View></View>;
    }
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
