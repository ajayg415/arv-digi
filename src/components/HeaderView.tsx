import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

import Colors from '../../constants/Colors';
import {IconView} from '.';

const HeaderView = ({title}: {title: string}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.iconsWrapper}>
        <IconView name={'bars'} size={30} />
        <IconView name={'search'} size={30} />
        <IconView name={'bell'} size={30} />
      </View>
      <Text h2 style={styles.header}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // position: 'absolute',
    // top: 0,
  },
  iconsWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
    alignContent: 'space-around',
  },
  header: {
    textAlign: 'center',
    color: Colors.white,
  },
});

export default HeaderView;
