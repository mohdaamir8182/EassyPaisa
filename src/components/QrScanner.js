import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class QrScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={styles.imgContainer}>
            <AntDesign name="qrcode" color="#fff" size={32} />
            <Text style={{fontSize: 10, color: 'white'}}>QR SCAN</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        height:75,
        width: 75,
        //paddingHorizontal: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        //alignSelf: 'center',
        bottom: 18,
        //right: ,
        left: (Dimensions.get('window').width / 2) - 32,
        borderRadius: 75/2,
        zIndex: 0
        //elevation: 10
    },
    imgContainer:{
        height: 60,
        width: 60,
        borderRadius: 60/2,
        backgroundColor: '#25AC5A',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    }
});
