import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../../constants/Colors';
import {IconView} from '.';

interface HeaderViewProps {
  children?: ReactNode;
  openDrawer: any;
}

const HeaderView = ({children, openDrawer}: HeaderViewProps) => {
  return (
    <View style={styles.screen}>
      <View style={styles.iconsWrapper}>
        <View style={styles.leftIcons}>
          <IconView
            name={'bars'}
            size={24}
            color={Colors.black}
            onPress={() => openDrawer()}
          />
        </View>
        <View style={styles.rightIcons}>
          <IconView name={'search'} size={24} color={Colors.primary} />
          <IconView name={'bell'} size={24} color={Colors.primary} />
        </View>
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
    marginVertical: 20,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  leftIcons: {
    borderColor: Colors.primary,
    borderWidth: 1,
    backgroundColor: Colors.primary,
    height: 30,
    width: 30,
    borderRadius: 8,
  },
  rightIcons: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
});

export default HeaderView;
