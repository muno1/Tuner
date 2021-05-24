import React, { Component } from "react";
import Note from "../src/components/note";
import Meter from "../src/components/meter";
import { View, Text, StatusBar, Switch } from "react-native";
/** Foglio di stile */
import style from "../styles/style";

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
        <StatusBar backgroundColor="#fff" translucent />
        <Meter style={style.meter} cents={this.props.note.cents} />
        <Note {...this.props.note} />
        <Text style={style.frequency}>
          {this.props.note.frequency.toFixed(1)} Hz
        </Text>
        <Text style={style.frequency}>
          Inharmonicity: {inharmonicity.toFixed(1)} Hz
        </Text>
        <Switch
          style={{
            paddingTop: 50,
            transform: [{ scaleX: 2 }, { scaleY: 2 }],
          }}
          value={this.props.tunerSwitch}
          onValueChange={() => {
            this.props.switchTuner();
          }}
        />
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

export default connect(mapStateToProps)(TunerScreen);
