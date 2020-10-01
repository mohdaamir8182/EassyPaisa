import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class GridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: ""
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      title: nextProps.title
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <Image 
            style={styles.imageStyle}
            source={require('../../assets/images/fon.png')}
            resizeMode="contain"
          />
          <Text style={styles.title}>{this.state.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        height: 100,
        width: 85,
        // //backgroundColor: 'tomato',
         margin: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        zIndex: 1
        //flex: 1
    },
    imageStyle:{
        width: 60,
        height: 60,
    },
    title:{
        alignSelf: 'center',
        textAlign: 'center', 
        fontSize: 11,
        paddingTop: 5
    }
});
