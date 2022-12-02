import {View, Text} from 'react-native';
import React from 'react';

const SwipeIndicator = ({step}: {step: number}) => {
  return (
    <View>
      <Text>{step}</Text>
    </View>
  );
};

export default SwipeIndicator;
