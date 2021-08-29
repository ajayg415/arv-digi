import React from 'react';
import {Overlay} from 'react-native-elements';
import {Button, StyleSheet, View} from 'react-native';

import {TextView} from '.';
import Colors from '../../constants/Colors';

interface OverlayView {
  show: boolean;
  setShow: (val: boolean) => void;
}

const OverlayView = ({show, setShow}: OverlayView) => {
  return (
    <View style={styles.screen}>
      <Overlay isVisible={show} overlayStyle={styles.overlay}>
        <TextView customStyles={styles.text}>Message Sent!</TextView>
        <Button onPress={() => setShow(false)} title="ok" />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // width: '50%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  text: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 18,
    paddingVertical: 20,
  },
  overlay: {
    width: 300,
    height: 150,
    backgroundColor: Colors.background,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default OverlayView;
