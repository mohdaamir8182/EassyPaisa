import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerNavigator} from '../../Routes';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
            <NavigationContainer independent={true} >
                <DrawerNavigator />
            </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    qrScannerStyle:{
      position: 'absolute',
      //bottom: -80,
      height: 60,
      width: 60,
      alignSelf: 'center'
    },
    contentContainer:{
      flex: 1,
      //marginBottom: 80,
    },
    sliderContainer:{
      flex: 3.5,
      // alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: '#25AC5A',
    },
    gridContainer:{
      flex:4,
      //backgroundColor: 'yellow'
    },
    grid:{
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      //backgroundColor: "blue",
      //marginTop: 100
    },
});