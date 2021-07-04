import React, { Component } from "react";
/** Native components */
import { View, Text, StatusBar, Switch, StyleSheet } from "react-native";

/** Components */
import Note from "../src/components/note";
import Meter from "../src/components/meter";

/** Redux */
import { connect } from "react-redux";

/** Note Functions */
import { getStandardFrequency } from "../src/noteFunctions";

let inharmonicity = 0;
class TunerScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    inharmonicity =
      getStandardFrequency(this.props.note.value, this.props.middleA) +
      this.props.inharmonicity[this.props.note.octave];
    return (
      <View style={style.body}>
        <View style={style.titleContainer}>
          <Text style={style.title}>Tuner</Text>
        </View>
        <View style={style.meterContainer}>
          <Meter style={style.meter} cents={this.props.note.cents} />
        </View>
        <View style={style.noteContainer}>
          <Note {...this.props.note} />
          <Text style={style.frequency}>
            {this.props.note.frequency.toFixed(1)} Hz
          </Text>
          <Switch
            style={{
              transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
            }}
            value={this.props.tunerSwitch}
            onValueChange={() => {
              this.props.switchTuner();
            }}
          />
        </View>
      </View>
    );
  }
}

/** Mappa lo stato (store) con le props, cosi' da poterle usare nel componente. */
const mapStateToProps = (state) => {
  const { note } = state;
  const { middleA } = state;
  const { tunerSwitch } = state;
  const { inharmonicity } = state;

  return { note, tunerSwitch, inharmonicity, middleA };
};

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  titleContainer: {
    paddingTop: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontFamily: "Raleway-ExtraLight",
    fontSize: 50,
  },
  meterContainer: {
    flex: 1,
    //backgroundColor: "#E9C46A",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 30,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 9,
    // },
    // shadowOpacity: 0.48,
    // shadowRadius: 11.95,
    //elevation: 18,
  },
  noteContainer: {
    flex: 3,
    backgroundColor: "white",
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#292929",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 5,
  },
  frequency: {
    fontSize: 28,
    color: "#37474f",
  },
});
export default connect(mapStateToProps)(TunerScreen);
