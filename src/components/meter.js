import React, { PureComponent, useState, useEffect } from "react";
import { Component } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Animated,
  ViewPropTypes,
} from "react-native";
export default class Meter extends PureComponent {
  state = {
    //  Oggetto per l'animazione
    cents: new Animated.Value(0),
  };

  componentDidUpdate() {
    // Aggiornare l'animazione
    Animated.timing(this.state.cents, {
      toValue: this.props.cents,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }

  render() {
    const cents = this.state.cents.interpolate({
      inputRange: [-50, 50],
      //outputRange: ["red", "green"],
      outputRange: [-100, 100],
    });
    const cents2 = this.state.cents.interpolate({
      inputRange: [-50, 50],
      //outputRange: ["red", "green"],
      outputRange: [100, -100],
    });
    const colorInterpolate = this.state.cents.interpolate({
      inputRange: [-50, -5, 0, 5, 50],
      //outputRange: ["red", "green"],
      outputRange: ["red", "orange", "green", "orange", "red"],
    });

    const animatedStyle = {
      borderColor: colorInterpolate,
    };
    return (
      <View style={style.meter}>
        <Animated.View
          style={[
            style.circle,
            style.pointer,
            { transform: [{ translateX: cents }] },
            animatedStyle,
          ]}
        />
        <Animated.View
          style={[
            style.circle,
            style.pointer,
            { transform: [{ translateX: cents2 }] },
            animatedStyle,
          ]}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  circle: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderColor: "red",
  },
  pointer: {
    borderTopWidth: 100,
  },
  meter: { height: 200, marginBottom: 40, marginLeft: -88 },
  mainBar: {
    position: "absolute",
    backgroundColor: "blue",
    height: 10,
    borderRadius: 25,
  },
  boxGreen: {
    position: "absolute",
    height: 70,
    width: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },

  boxOrange: {
    position: "absolute",
    height: 70,
    width: 10,
    backgroundColor: "orange",
    borderRadius: 5,
  },
  boxRed: {
    position: "absolute",

    height: 70,
    width: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
});

Meter.defaultProps = {
  minLength: 4,
  maxLength: 15,
  showLabels: true,
  backgroundColor: "gray",
  fromColor: "red",
  toColor: "green",
};
