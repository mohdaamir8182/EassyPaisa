import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const data = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];

export default class TopCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 3
    };
  }

  _renderItem = ({item, index}) => {
    return (
        <View>
            <Image 
              source={{uri: item.illustration}} 
              style={styles.imgStyle}
           />
        </View>
    );
  }

  get pagination () {
    const { activeSlide } = this.state;
    return (
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          dotStyle={{
              width: 10,
              height: 2,
              borderRadius: 5,
              //marginHorizontal: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
    );
}

  render() {
    return (
      <View>

            <View  style={styles.slide}>
                
            </View>
          
            <Carousel
              //style={{alignSelf: 'center'}}
              ref={(c) => { this._carousel = c; }}
              data={data}
              renderItem={this._renderItem}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={wp("77.5%")}
              layout={'default'}
              enableSnap={true}
              loop={true}
              loopClonesPerSide={3}
              autoplay={true}
              //hasParallaxImages={true}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
            />

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    slide:{
      height: 5,
      marginVertical: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    dotsContainerStyle:{
          backgroundColor: 'red'
    },
    imgStyle:{
      height: hp("22%"),
      width:wp("77.5%"),
      // borderBottomRightRadius: 10,
      // borderBottomLeftRadius: 10,
      // borderTopLeftRadius: 10,
      // borderTopRightRadius: 10,
      overflow: "hidden",
      borderRadius: 10

    }    
});