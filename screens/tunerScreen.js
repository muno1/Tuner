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
const TunerScreen = (props) => {
  return (
    <View>
      <StatusBar backgroundColor="#fff" translucent />
      <Meter cents={props.note.cents} />
      <Note {...props.note} />
      <Text style={style.frequency}>{props.note.frequency.toFixed(1)} Hz</Text>
    </View>
  );
};

export default TunerScreen;
