import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';
import {IconView} from '.';

const HeaderView = ({children}: {children?: ReactNode}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.iconsWrapper}>
        <IconView name={'bars'} size={30} />
        <IconView name={'search'} size={30} />
        <IconView name={'bell'} size={30} />
      </View>
      {children}
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
});

export default HeaderView;
