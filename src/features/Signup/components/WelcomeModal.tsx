import {View, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import React from 'react';
import TextInputWithIcon from '../../../components/input/TextInputWithIcon';

const WelcomeModal = () => {
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
        Signup and Start Working Out!
      </Text>

      <View style={{flex: 1, marginHorizontal: 20, marginTop: 30}}>
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
              placeholder="Your Name"
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
              placeholder="Your Name"
            />
          )}
        />
      </View>
    </View>
  );
};

export default WelcomeModal;
