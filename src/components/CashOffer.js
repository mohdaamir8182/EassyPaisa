import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class CashOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.icon}>
            <MaterialCommunityIcons name="crown" size={24} color="#feb72b" />
        </View>

        <View style={styles.description}>
            <Text style={{fontSize: 9}}>Daily Cashback Offer</Text>
            <Text style={{fontSize: 10, color: '#25AC5A'}}>Perform a transaction to get daily cashback</Text>
        </View>

        <View style={styles.button}>
            <View style={styles.signInBtnStyle}>
                    <Text style={{color: '#fff', fontSize: 10}}>
                        See How
                    </Text>
            </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        height: 35,
        backgroundColor: '#f1f3f4',
        borderRadius: 40,
        position: 'absolute',
        left: 10,
        right: 10,
        top: 50,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        elevation: 5
    },
    icon:{
        flex : 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    description:{
        flex: 8,
        //alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        flex: 3,
        // alignItems: 'center',
         justifyContent: 'flex-start',
        //backgroundColor: 'red'
    },
    signInBtnStyle:{
        height: 20,
        width: 70,
        backgroundColor: '#25AC5A',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});