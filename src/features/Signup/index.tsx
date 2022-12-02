import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const SignupScreen = () => {
  const navigation = useNavigation();
  const onSignupWithEmaillPressed = () => {
    navigation.navigate('SignupModal');
  };
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 30, color: 'black', marginTop: 40}}>
        Signup or login
      </Text>

      <TouchableOpacity onPress={onSignupWithEmaillPressed}>
        <Text>Continue with email</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Continue with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
