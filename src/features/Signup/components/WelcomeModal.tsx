import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import React from 'react';
import TextInputWithIcon from '../../../components/input/TextInputWithIcon';
import PrimaryButton from '../../../components/button/PrimaryButton';
import {useTheme} from '../../../theme/theme';
import FText from '../../../components/text/Text';

const WelcomeModal = () => {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });
  const onSubmit = data => console.log(data);

  const onSignInPressed = () => {};

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: '600',
          fontFamily: 'manrope',
          color: 'white',
          marginBottom: 20,
          textAlign: 'center',
          marginHorizontal: 60,
          marginTop: 30,
        }}>
        Signup and Start Working Out
      </Text>

      <View style={{flex: 1, marginHorizontal: 20, marginTop: 20}}>
        <Controller
          name="name"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInputWithIcon
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Your Name"
            />
          )}
        />

        <View style={{height: 20}} />

        <Controller
          name="email"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInputWithIcon
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email address"
            />
          )}
        />

        <View style={{height: 20}} />

        <Controller
          name="phone"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInputWithIcon
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Phone number"
            />
          )}
        />

        <Text
          style={{color: theme.colors.grey3, marginVertical: 20, fontSize: 13}}>
          By signing up you agree to our{' '}
          <Text style={{color: theme.colors.subtext}}>Terms of use</Text> and{' '}
          <Text style={{color: theme.colors.subtext}}>privacy notice</Text>
        </Text>

        <PrimaryButton onPress={handleSubmit(onSubmit)} text="Sign Up Now" />

        <FText
          style={{
            fontSize: 14,
            marginTop: 20,
            textAlign: 'center',
            color: theme.colors.grey3,
          }}>
          Already registered?{'  '}
          <Text
            onPress={onSignInPressed}
            style={{color: theme.colors.primary, fontWeight: '600'}}>
            Sign in
          </Text>
        </FText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WelcomeModal;
