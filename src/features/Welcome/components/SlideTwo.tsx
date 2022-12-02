import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SwipeIndicator from './SwipeIndicator';
import {useNavigation, useTheme} from '@react-navigation/native';
import {FitTheme} from '../../../theme/theme';

const SlideTwo = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const onSignupPressed = () => {
    navigation.navigate('SignupScreen');
  };

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
          justifyContent: 'flex-end',
          marginBottom: 40,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontFamily: 'manrope',
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Achieve your goals
        </Text>
        <Text
          style={{
            color: FitTheme.colors.subtext,
            fontSize: 16,
            fontFamily: 'manrope',
            textAlign: 'center',
          }}>
          Plan your workouts, track your weights & let's achieve your goals
        </Text>

        <TouchableOpacity
          onPress={onSignupPressed}
          style={{
            backgroundColor: theme.colors.primary,
            marginHorizontal: 50,
            marginTop: 50,
            paddingVertical: 15,
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <View>
            <Text>Sign Up Now</Text>
          </View>
        </TouchableOpacity>

        <SwipeIndicator step={2} />
      </View>
    </ImageBackground>
  );
};

export default SlideTwo;
