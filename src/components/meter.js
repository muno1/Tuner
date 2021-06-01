import React, { PureComponent } from "react";
import { View, StyleSheet, Animated } from "react-native";
export default class Meter extends PureComponent {
  state = {
    //  Oggetto per l'animazione
    cents: new Animated.Value(0),
  };

  async componentDidUpdate() {
    // Aggiornare l'animazione
    Animated.timing(this.state.cents, {
      toValue: this.props.cents,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const cents = this.state.cents.interpolate({
      inputRange: [-50, 50],
      outputRange: [-100, 100],
    });
    const cents2 = this.state.cents.interpolate({
      inputRange: [-50, 50],
      outputRange: [100, -100],
    });

    const opacityInterpolate = this.state.cents.interpolate({
      inputRange: [-50, -5, 0, 5, 50],
      outputRange: [0, 0.7, 1, 0.7, 0],
    });

    return (
      <View style={style.meter}>
        <Animated.View
          style={[style.circle, { transform: [{ translateX: cents }] }]}
        />
        <Animated.View
          style={[style.circle, { transform: [{ translateX: cents2 }] }]}
        />
        <Animated.View
          style={[
            style.circle,
            { transform: [{ translateX: cents }] },
            { backgroundColor: "#009FFD" },
            { opacity: opacityInterpolate },
          ]}
        />
        <Animated.View
          style={[
            style.circle,
            { transform: [{ translateX: cents2 }] },
            { backgroundColor: "#009FFD" },
            { opacity: opacityInterpolate },
          ]}
        />
      </View>
    );
  }
}

const size = 110;
const style = StyleSheet.create({
  circle: {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor: "#E9C46A",
    borderWidth: 0,
    shadowColor: "#292929",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 5,
  },
  meter: { marginLeft: -size },
});
