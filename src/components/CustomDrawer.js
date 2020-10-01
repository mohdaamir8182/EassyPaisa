import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  import Switch from '../components/Switch';
  import { MaterialIcons, AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';

  const CustomDrawer = (props) => {

    return (
        <View style={styles.container}>

          <View style={styles.headerStyle}>
            <View style={styles.avatarContainer}>
                <Image  
                    source={{uri:"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"}}
                    style={{height: 60, width: 60}}
                />
            </View>
            
            <View style={styles.userDetails}>
                <Text style={{color:"white", fontSize: 18}}>AAMIR MAHMOOD</Text>
                <Text style={{color:"white", fontSize: 11}}>0304 8978182</Text>
                <Text style={{color:"white", fontSize: 11}}>Register your eMail</Text>
            </View>
          </View>

          <View style={styles.switchContainer}>
               <Text style={{color: "#252525", fontSize: 10}}>Vesrsion V.2.1.7</Text>
               <Switch />
          </View>
  
          <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
          </DrawerContentScrollView>
  
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent: 'center',
        // alignItems: 'center'
        //backgroundColor: 'red'
    },
    headerStyle:{
        height: 150,
        backgroundColor: '#25AC5A',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    switchContainer:{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15
    },
    avatarContainer:{
        marginRight: 10,
        marginLeft: 15,
        justifyContent: 'center'
    },
    userDetails:{
        //justifyContent: 'flex-end',
    }
});

export default CustomDrawer;
