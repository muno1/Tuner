import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Do1")}
      >
        <Text style={styles.submitButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

function TextInputs() {
  const { handleFrequency, handleLength, handleDiameter, handleDensity } =
    React.useContext(MyContext);
  return (
    <View>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Frequency (Hz)"
        placeholderTextColor="#000"
        autoCapitalize="none"
        keyboardType="numeric"
        onChangeText={(frequency) => {
          handleFrequency(parseInt(frequency));
        }}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Length (mm)"
        placeholderTextColor="#000"
        autoCapitalize="none"
        keyboardType="numeric"
        onChangeText={(length) => {
          handleLength(parseInt(length));
        }}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Diameter (mm)"
        placeholderTextColor="#000"
        autoCapitalize="none"
        keyboardType="numeric"
        onChangeText={(diameter) => {
          handleDiameter(parseInt(diameter));
        }}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Densità (kg/m3)"
        placeholderTextColor="#000"
        autoCapitalize="none"
        keyboardType="numeric"
        onChangeText={(density) => {
          handleDensity(parseInt(density));
        }}
      />
    </View>
  );
}

function Do1({ navigation }) {
  // const { handleFrequency, handleLength, handleDiameter, handleDensity } =
  //   React.useContext(MyContext);
  return (
    <View style={styles.body}>
      <TextInputs />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          navigation.navigate("Do2");
        }}
      >
        <Text style={styles.submitButtonText}> Calculate </Text>
      </TouchableOpacity>
    </View>
  );
}

function Do2({ navigation }) {
  return (
    <View style={styles.body}>
      <TextInputs />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Do3")}
      >
        <Text style={styles.submitButtonText}> Calculate </Text>
      </TouchableOpacity>
    </View>
  );
}

function Do3({ navigation }) {
  return (
    <View style={styles.body}>
      <TextInputs />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Do4")}
      >
        <Text style={styles.submitButtonText}> Calculate </Text>
      </TouchableOpacity>
    </View>
  );
}

function Do4({ navigation }) {
  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Do5")}
      >
        <Text style={styles.submitButtonText}> Calculate </Text>
      </TouchableOpacity>
    </View>
  );
}

function Do5({ navigation }) {
  return (
    <View style={styles.body}>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.submitButtonText}> Calculate </Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();
const MyContext = React.createContext();
class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frequency: 0,
      length: 0,
      diameter: 0,
      density: 0,
      calculation: 0,
    };
  }

  handleFrequency = (_freq) => {
    console.log("ciao");
    this.setState({ frequency: _freq });
  };
  handleLength = (_length) => {
    this.setState({ length: _length });
  };
  handleDiameter = (_diameter) => {
    this.setState({ diameter: _diameter });
  };
  handleDensity = (_density) => {
    this.setState({ density: _density });
  };
  /* alg = (frequency, length, diameter) => {
    alert(
      "frequenza: " +
        frequency +
        " lunghezza: " +
        length +
        "diametro" +
        diameter
    );
  };
*/
  /* algorithm = () => {
    var f = this.state.frequency;
    var l = this.state.length;
    var d = this.state.diameter;
    var cal = f * l * d;

    alert(cal);
  };
*/
  render() {
    console.log(this.state);
    return (
      <MyContext.Provider
        value={{
          handleFrequency: this.handleFrequency,
          handleLength: this.handleLength,
          handleDiameter: this.handleDiameter,
          handleDensity: this.handleDensity,
        }}
      >
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Start" }}
          />
          <Stack.Screen name="Do1" component={Do1} options={{ title: "Do1" }} />
          <Stack.Screen name="Do2" component={Do2} options={{ title: "Do2" }} />
          <Stack.Screen name="Do3" component={Do3} options={{ title: "Do3" }} />
          <Stack.Screen name="Do4" component={Do4} options={{ title: "Do4" }} />
          <Stack.Screen name="Do5" component={Do5} options={{ title: "Do5" }} />
        </Stack.Navigator>
      </MyContext.Provider>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "white",
  },
  input: {
    margin: 15,
    height: 40,

    borderWidth: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  submitButton: {
    backgroundColor: "black",
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
