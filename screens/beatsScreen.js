import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'


export default class Beats extends Component{

    render(){
        return (
            <View style={ header.headerStyle }>
             <Text>Beats</Text>
            </View>
            )}      
}

export const header = {
    // background
    headerStyle: {
      backgroundColor: "black",
      flex :1,
      justifyContent: "center",
      alignItems: "center"
    },
}