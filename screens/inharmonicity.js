import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';import style from "../styles/style";


function Home({navigation}){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <TouchableOpacity 
        style={styles.submitButton}
        onPress={() => navigation.navigate('Do1')}
      >
      <Text style={styles.submitButtonText}>Start</Text>
     </TouchableOpacity> 
  </View>
  )
}

function Do1({navigation}){
return(
<View style={styles.body}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Frequency (Hz)"
          placeholderTextColor="#000"
          autoCapitalize="none"
          onChangeText={(frequency) => this.setState({ frequency })}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Length (mm)"
          placeholderTextColor="#000"
          autoCapitalize="none"
          onChangeText={(length) => this.setState({ length })}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Diameter (mm)"
          placeholderTextColor="#000"
          autoCapitalize="none"
          onChangeText={(diameter) => this.setState({ diameter })}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Densità (kg/m3)"
          placeholderTextColor="#000"
          autoCapitalize="none"
          onChangeText={(diameter) => this.setState({ diameter })}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate('Do2')}
          /*onPress={() =>
            this.algorithm(
              this.state.frequency,
              this.state.length,
              this.state.diameter
            )
          }*/
        >
          <Text style={styles.submitButtonText}> Calculate </Text>
        </TouchableOpacity>
      </View>
);
}

function Do2({navigation}){
  return(
  <View style={styles.body}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Frequency (Hz)"
            placeholderTextColor="#000"
            autoCapitalize="none"
            onChangeText={(frequency) => this.setState({ frequency })}
          />
  
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Length (mm)"
            placeholderTextColor="#000"
            autoCapitalize="none"
            onChangeText={(length) => this.setState({ length })}
          />
  
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Diameter (mm)"
            placeholderTextColor="#000"
            autoCapitalize="none"
            onChangeText={(diameter) => this.setState({ diameter })}
          />
  
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Densità (kg/m3)"
            placeholderTextColor="#000"
            autoCapitalize="none"
            onChangeText={(diameter) => this.setState({ diameter })}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => navigation.navigate('Do3')}
            /*onPress={() =>
              this.algorithm(
                this.state.frequency,
                this.state.length,
                this.state.diameter
              )
            }*/
          >
            <Text style={styles.submitButtonText}> Calculate </Text>
          </TouchableOpacity>
        </View>
  );
  }

  function Do3({navigation}){
    return(
    <View style={styles.body}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Frequency (Hz)"
              placeholderTextColor="#000"
              autoCapitalize="none"
              onChangeText={(frequency) => this.setState({ frequency })}
            />
    
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Length (mm)"
              placeholderTextColor="#000"
              autoCapitalize="none"
              onChangeText={(length) => this.setState({ length })}
            />
    
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Diameter (mm)"
              placeholderTextColor="#000"
              autoCapitalize="none"
              onChangeText={(diameter) => this.setState({ diameter })}
            />
    
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Densità (kg/m3)"
              placeholderTextColor="#000"
              autoCapitalize="none"
              onChangeText={(diameter) => this.setState({ diameter })}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => navigation.navigate('Do4')}
              /*onPress={() =>
                this.algorithm(
                  this.state.frequency,
                  this.state.length,
                  this.state.diameter
                )
              }*/
            >
              <Text style={styles.submitButtonText}> Calculate </Text>
            </TouchableOpacity>
          </View>
    );
    }

    function Do4({navigation}){
      return(
      <View style={styles.body}>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Frequency (Hz)"
                placeholderTextColor="#000"
                autoCapitalize="none"
                onChangeText={(frequency) => this.setState({ frequency })}
              />
      
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Length (mm)"
                placeholderTextColor="#000"
                autoCapitalize="none"
                onChangeText={(length) => this.setState({ length })}
              />
      
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Diameter (mm)"
                placeholderTextColor="#000"
                autoCapitalize="none"
                onChangeText={(diameter) => this.setState({ diameter })}
              />
      
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Densità (kg/m3)"
                placeholderTextColor="#000"
                autoCapitalize="none"
                onChangeText={(diameter) => this.setState({ diameter })}
              />
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => navigation.navigate('Do5')}
                /*onPress={() =>
                  this.algorithm(
                    this.state.frequency,
                    this.state.length,
                    this.state.diameter
                  )
                }*/
              >
                <Text style={styles.submitButtonText}> Calculate </Text>
              </TouchableOpacity>
            </View>
      );
      }

      function Do5({navigation}){
        return(
        <View style={styles.body}>
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Frequency (Hz)"
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                  onChangeText={(frequency) => this.setState({ frequency })}
                />
        
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Length (mm)"
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                  onChangeText={(length) => this.setState({ length })}
                />
        
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Diameter (mm)"
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                  onChangeText={(diameter) => this.setState({ diameter })}
                />
        
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="Densità (kg/m3)"
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                  onChangeText={(diameter) => this.setState({ diameter })}
                />
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() => navigation.navigate('Do1')}
                  /*onPress={() =>
                    this.algorithm(
                      this.state.frequency,
                      this.state.length,
                      this.state.diameter
                    )
                  }*/
                >
                  <Text style={styles.submitButtonText}> Calculate </Text>
                </TouchableOpacity>
              </View>
        );
        }

        
        
const Stack = createStackNavigator();

class Inputs extends Component {
 /* constructor(props) {
    super(props);
    this.state = { frequency: "" };
    this.state = { length: "" };
    this.state = { diameter: "" };
    this.cal = { calculation: "" };
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

 /* algorithm = () => {
    var f = this.state.frequency;
    var l = this.state.length;
    var d = this.state.diameter;
    var cal = f * l * d;

    alert(cal);
  };
*/
  render() {
    return (
      
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
          name="Home" 
          component = {Home}
          options={{ title: 'Start' }}
          />
          <Stack.Screen 
          name="Do1" 
          component ={Do1}
          options={{ title: 'Do1' }}
          />
          <Stack.Screen 
          name="Do2" 
          component ={Do2}
          options={{ title: 'Do2' }}
          />
          <Stack.Screen 
          name="Do3" 
          component ={Do3}
          options={{ title: 'Do3' }}
          />
          <Stack.Screen 
          name="Do4" 
          component ={Do4}
          options={{ title: 'Do4' }}
          />
          <Stack.Screen 
          name="Do5" 
          component ={Do5}
          options={{ title: 'Do5' }}
          />
        </Stack.Navigator>
      
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
