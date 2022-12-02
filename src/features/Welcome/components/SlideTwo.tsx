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
import PrimaryButton from '../../../components/button/PrimaryButton';

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

        <View style={{marginTop: 50}}>
          <PrimaryButton text="Sign Up Now" onPress={onSignupPressed} />
        </View>

        <SwipeIndicator step={2} />
      </View>
    </ImageBackground>
  );
};

export default SlideTwo;
