import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';

import {TextView, HeaderView, CollapsableView} from '../components';
import Colors from '../../constants/Colors';

const Faq = ({navigation: {goBack, openDrawer}}: {navigation: any}) => {
  return (
    <View style={styles.screen}>
      <HeaderView openDrawer={openDrawer}>
        <View style={styles.header}>
          <Text h4 style={styles.title}>
            FAQ
          </Text>
          <TextView customStyles={styles.back} onPress={goBack}>
            Back
          </TextView>
        </View>
      </HeaderView>
      <ScrollView>
        <View style={styles.faqs}>
          <CollapsableView />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    color: Colors.white,
  },
  back: {
    color: Colors.primary,
    fontSize: 15,
  },
  faqs: {},
});

export default Faq;
