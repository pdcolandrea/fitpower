import React, {useRef} from 'react';
import {ScrollView, Text, View} from 'react-native';
import SlideOne from './components/SlideOne';
import SlideTwo from './components/SlideTwo';

const WelcomeScreen = () => {
  const swiperRef = useRef<ScrollView>(null);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        ref={swiperRef}
        onTouchEndCapture={e => {
          swiperRef.current?.scrollToEnd();
        }}
        horizontal
        decelerationRate={0}
        contentContainerStyle={{flex: 1}}>
        <SlideTwo />
        {/* <SlideOne /> */}
      </ScrollView>
    </View>
  );
};

export default WelcomeScreen;
