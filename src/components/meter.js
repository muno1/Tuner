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
            { backgroundColor: "rgb(40, 255, 69)" },
            { opacity: opacityInterpolate },
          ]}
        />
        <Animated.View
          style={[
            style.circle,
            { transform: [{ translateX: cents2 }] },
            { backgroundColor: "rgb(40, 255, 69)" },
            { opacity: opacityInterpolate },
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
    backgroundColor: "white",
    borderWidth: 0,
  },
  meter: { height: 200, marginBottom: 40, marginLeft: -88 },
});
