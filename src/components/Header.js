import React, { Component } from 'react';
import { View, Text,StyleSheet, Image, TouchableOpacity, Platform, StatusBar} from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>

          <TouchableOpacity style={styles.icon} onPress={() => this.props.navigationAction.openDrawer()}>
                <MaterialIcons name="menu" size={24} />
          </TouchableOpacity>

          <View style={styles.logo}>
                <Image 
                    source={require('../../assets/images/logo.png')}
                    style={{height: 80 , width: 100}}
                    resizeMode="contain"
                />
          </View>

          <View style={styles.actions}>
              <TouchableOpacity>
                <AntDesign name="staro" size={24} />
              </TouchableOpacity>

              <TouchableOpacity>  
                <FontAwesome name="bell-o" size={24} />
              </TouchableOpacity>

              <TouchableOpacity>  
                <Ionicons name="ios-search" size={24} />
              </TouchableOpacity>  
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        elevation: 0.8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginTop: Platform.OS === 'ios' ? 35 : 0,
    },
    icon:{
        flex: 2,
        //backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        flex: 4,
        //backgroundColor: 'green',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 12
    },
    actions:{
        flex: 3,
        //backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        //marginHorizontal: 5
        paddingLeft: 10
    }
});