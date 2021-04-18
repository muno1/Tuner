function tunerTab() {
    return (
      <View style={style.body}>
          <StatusBar backgroundColor="#000" translucent />
          <Meter cents={this.state.note.cents} />
          <Note {...this.state.note} />
          <Text style={style.frequency}>
            {this.state.note.frequency.toFixed(1)} Hz
          </Text>
        </View>
    );
  }