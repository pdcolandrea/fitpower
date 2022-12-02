import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import SwipeIndicator from './SwipeIndicator';

const SlideOne = () => {
  return (
    <ImageBackground
      source={require('../../../assets/img/barbell.jpg')}
      accessibilityLabel="barbell"
      style={{
        width: '100%',
      }}>
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'flex-end',
          marginBottom: 40,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontFamily: 'manrope',
            fontWeight: '700',
          }}>
          CREATE A WORKOUT
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontFamily: 'manrope',
            fontWeight: '700',
            textAlign: 'center',
          }}>
          to STAY FIT
        </Text>

        <SwipeIndicator step={1} />
      </View>
    </ImageBackground>
  );
};

export default SlideOne;
