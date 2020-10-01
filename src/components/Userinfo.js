import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class Userinfo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftContainer}>

                        <View style={styles.logo}>
                            <Image 
                                source={require('../../assets/images/roundlogo.png')}
                                style={{height: 35 , width: 35}}
                                resizeMode= 'contain'
                            />
                        </View>

                        <View style={styles.info}>
                            <Text 
                                style={{color: '#ccc'}}
                            >
                                Amir Mahmood
                            </Text>
                            <Text>03048978182</Text>
                        </View>

                </View>

                <View style={styles.rightContainer}>
                        <View style={styles.signInBtnStyle}>
                                <Text style={{color: '#fff'}}>
                                    Sign In
                                </Text>
                        </View>
                        <Text style={{color: '#ccc', fontSize: 8, marginTop: 5}}>
                            Sign in to your easypaisa Account
                        </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#fff',
        position: 'absolute',
        right: 10,
        left: 10,
        //top: 0,
        bottom: -34,
        borderRadius: 6,
        shadowOffset: { width: 3, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.1,
        elevation: 5,
        zIndex:  1
    },
    leftContainer:{
        flex:1 ,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'tomato'
    },
    rightContainer:{
        flex:1 ,
        //backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    logo:{
        flex: 2,
        //backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    info:{
        flex: 4,
        //backgroundColor: 'teal',
        //alignItems: 'center',
        justifyContent: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        marginVertical: 15,
        paddingRight: 5
    },
    signInBtnStyle:{
        height: 25,
        width: 110,
        backgroundColor: '#25AC5A',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
