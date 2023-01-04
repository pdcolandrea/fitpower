import Header from '@/components/header/Header';
import FText from '@/components/text/Text';
import {useTheme} from '@/theme/theme';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const DashboardScreen = () => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{paddingHorizontal: 20}}>
      <Header name="Paul C" />

      <FText style={styles.header}>Today</FText>

      <ImageBackground
        source={require('../../assets/img/barbell.jpg')}
        style={{width: '100%', height: 200, marginTop: 15}}
        borderRadius={20}>
        <View style={{position: 'absolute', bottom: 10, padding: 20}}>
          <FText
            style={{
              color: 'white',
              fontWeight: '800',
              fontSize: 20,
            }}>
            Day 05 - Chest/Tricep Day
          </FText>
          <View
            style={{
              height: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: '30%',
                width: 3,
                backgroundColor: theme.colors.primary,
                marginRight: 5,
              }}
            />
            <FText style={{color: theme.colors.primary, fontWeight: '600'}}>
              335 1RM
            </FText>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: '800',
    color: 'white',
    fontSize: 24,
    marginTop: 20,
  },
});

export default DashboardScreen;
