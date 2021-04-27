import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = { frequency: "" };
    this.state = { length: "" };
    this.state = { diameter: "" };
  }

  /*state = {
      frequency: '',
      length: '',
      diameter:''
   }
   handleFrequency = (text) => {
      this.setState({ frequency: text })
   }
   handleLength = (text) => {
      this.setState({ length: text })
   }
   handleDiameter = (text) => {
    this.setState({ diameter: text })
 }
   alg = (frequency,length,diameter) => {
      alert('frequenza: ' + frequency + ' lunghezza: ' + length+'diametro'+diameter)
   }*/

  algorithm = () => {
    var f = this.state.frequency;
    var l = this.state.length;
    var d = this.state.diameter;
    var cal = f * l * d;

    alert(cal);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Frequency (Hz)"
          placeholderTextColor="#fff"
          autoCapitalize="none"
          onChangeText={(frequency) => this.setState({ frequency })}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Length (mm)"
          placeholderTextColor="#fff"
          autoCapitalize="none"
          onChangeText={(length) => this.setState({ length })}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Diameter (mm)"
          placeholderTextColor="#fff"
          autoCapitalize="none"
          onChangeText={(diameter) => this.setState({ diameter })}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.algorithm(
              this.state.frequency,
              this.state.length,
              this.state.diameter
            )
          }
        >
          <Text style={styles.submitButtonText}> Calculate </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  submitButton: {
    backgroundColor: "red",
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
  },
});

export const header = {
  // background
  headerStyle: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
};
