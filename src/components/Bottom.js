import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, SafeAreaView } from 'react-native';
import { SimpleLineIcons, Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';
import QrScanner from './QrScanner';

export default class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>

          <QrScanner />

          <TouchableOpacity style={styles.iconStyle}>
              <SimpleLineIcons name="user" color="#fff" size={24} />
              <Text style={styles.textStyle}>My Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.iconStyle,marginRight: 90}}>
              <Entypo name="credit-card" color="#fff" size={24} />
              <Text style={styles.textStyle}>Cash Deposit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconStyle}>
              <FontAwesome name="bullhorn" color="#fff" size={24} />
              <Text style={styles.textStyle}>Promotions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconStyle}>
              <SimpleLineIcons name="tag" color="#fff" size={24} />
              <Text style={styles.textStyle}>Discounts</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        height: Platform.OS === 'ios' ? 70 : 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#25AC5A',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 10,
        paddingBottom: Platform.OS === 'ios' ? 10 : 0,
    },
    textStyle:{
      fontSize: 10,
      color: '#fff'
    },
    iconStyle:{
      alignItems: 'center'
    }
});