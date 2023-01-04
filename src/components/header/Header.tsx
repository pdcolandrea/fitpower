import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FText from '../text/Text';
import {Icon} from 'react-native-elements';

interface HeaderProps {
  name: string;
}
const Header = (props: HeaderProps) => {
  return (
    <View style={styles.spacedRow}>
      <View style={styles.row}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 100,
            backgroundColor: '#C4C4C5',
            marginRight: 15,
          }}
        />
        <View style={styles.col}>
          <FText style={{color: '#C4C4C5', fontSize: 16}}>Lift Heavy</FText>
          <FText style={{color: 'white', fontWeight: '600', fontSize: 19}}>
            {props.name}
          </FText>
        </View>
      </View>

      <View style={styles.row}>
        <Icon name="heart" type="font-awesome" size={30} color="#C4C4C5" />
        <Icon
          name="bell"
          type="font-awesome"
          size={30}
          color="#C4C4C5"
          style={{marginLeft: 20}}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  col: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
