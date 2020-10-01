import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.continer}>

        <View style={styles.leftButton}>
                <Text style={{color: 'black',fontSize: 12}}>ENG</Text>
        </View>

        <View style={styles.rightButton}>
                <Text style={{color: 'white', fontSize: 12}}>URDU</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    continer:{
        height: 30,
        width: 110,
        backgroundColor: '#bbbbbb',
        borderRadius: 5,
        flexDirection: 'row'
    },
    leftButton:{
        flex: 1,
        backgroundColor: '#bbbbbb',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightButton:{
        flex: 1,
        backgroundColor: '#25AC5A',
        // borderTopRightRadius: 5,
        // borderBottomRightRadius: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
