import React from "react";
import { View, Text, StatusBar } from "react-native";
import Meter from "./meter";
import Note from "./note";
import style from "../../styles/style";

/*  Componente di visualizzazione dell'oscillatore e della nota
 *   Fa uso dei props per prendere parametri.
 *
 *  Props: note.
 */
const NoteView = (props) => {
  return (
    // <View>
    //   <StatusBar backgroundColor="#fff" translucent />
    //   <Meter cents={this.state.note.cents} />
    //   <Note {...this.state.note} />
    //   <Text style={style.frequency}>
    //     {this.state.note.frequency.toFixed(1)} Hz
    //   </Text>
    // </View>

    <View>
      <StatusBar backgroundColor="#fff" translucent />
      <Meter cents={props.cents} />
      <Note {...props.note} />
      <Text style={style.frequency}>{props.frequency.toFixed(1)} Hz</Text>
    </View>
  );
};

export default NoteView;
