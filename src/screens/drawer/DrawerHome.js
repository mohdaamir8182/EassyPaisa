import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../../components/Header';
import Bottom from '../../components/Bottom';
import TopCarousel from '../../components/TopCarousel';
import Userinfo from '../../components/Userinfo';
import GridItem from '../../components/GridItem';
import CashOffer from '../../components/CashOffer';

const data = [
  {
    key: 1,
    title: "Money Transfer"
  },
  {
    key: 2,
    title: "Easyload/Bundles"
  },
  {
    key: 3,
    title: "Bill Payment"
  },
  {
    key: 4,
    title: "Add Card"
  },
  {
    key: 5,
    title: "Fantasy League"
  },
  {
    key: 6,
    title: "Topups"
  },
  {
    key: 7,
    title: "Invite & Earn"
  },
  {
    key: 8,
    title: "My Cashback"
  },
  {
    key: 9,
    title: "Tickets"
  },
  {
    key: 10,
    title: "Tohfa"
  },
  {
    key: 11,
    title: "Remittance"
  },
  {
    key: 12,
    title: "View All"
  },
]

export default class DrawerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
            <Header navigationAction={this.props.navigation} />

                <View style={styles.contentContainer}>

                      <View style={styles.sliderContainer}>
                          <TopCarousel />
                          <Userinfo />
                      </View>

                      <View style={styles.gridContainer}>
                          <CashOffer />
                          <View style={{height: 95}} />
                          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>  
                            <View style={styles.grid}>
                                {
                                  data.map((data) => {
                                    return(
                                      <GridItem title={data.title} />
                                    );
                                  })
                                }
                            </View>
                          </ScrollView> 
                      </View>

                </View>

                <View style={{height: 60}} />

            <Bottom />
      </View>
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
      //flex: 3.5,
      height: hp("33%"),
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
      zIndex: 1
      //backgroundColor: "blue",
      //marginTop: 100
    },
});