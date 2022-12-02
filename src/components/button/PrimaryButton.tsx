import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import FText from '@/components/text/Text';

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
}
const PrimaryButton = (props: PrimaryButtonProps) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: theme.colors.primary,
        marginHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
      }}>
      <View>
        <FText style={{fontWeight: '700', fontSize: 16}}>Sign Up Now</FText>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
