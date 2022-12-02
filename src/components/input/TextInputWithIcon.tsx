import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

interface TextInputIconProps extends TextInputProps {}
const TextInputWithIcon = (props: TextInputIconProps, icon: string) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: theme.colors.alt,
        minHeight: 60,
        width: '100%',
        alignItems: 'center',
        borderRadius: 5,
      }}>
      <Icon name="user" type="font-awesome" />
      <TextInput
        style={{flex: 1, color: 'white', fontSize: 15}}
        placeholder="Enter text..."
        placeholderTextColor="grey"
        {...props}
      />
    </View>
  );
};

export default TextInputWithIcon;

const styles = StyleSheet.create({});
