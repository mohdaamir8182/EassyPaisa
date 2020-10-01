import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Rewards extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Rewards </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "teal",
    }
});