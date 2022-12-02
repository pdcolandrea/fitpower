import {Text, TextProps} from 'react-native';
import React from 'react';

const FText = (props: TextProps) => {
  const propStyles = props?.style;
  delete props.style;
  return <Text style={[propStyles, {fontFamily: 'manrope'}]} {...props} />;
};

export default FText;
