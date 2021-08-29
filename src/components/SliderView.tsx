import React, {useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {Slider} from 'react-native-elements';

import {TextView} from '.';
import Colors from '../../constants/Colors';

interface SliderViewProps {
  sliderValue: number;
  title: string;
  min?: number;
  max?: number;
}

const SliderView = ({
  sliderValue,
  min = 0,
  max = 100,
  title,
}: SliderViewProps) => {
  const [val, setVal] = useState<number>(sliderValue);
  return (
    <View style={styles.screen}>
      <TextView customStyles={styles.title}>{title}</TextView>
      <View style={styles.wrapper}>
        <View style={styles.slider}>
          <Slider
            minimumValue={min}
            maximumValue={max}
            value={val}
            onValueChange={value => setVal(value)}
            step={1}
            thumbStyle={{
              height: 20,
              width: 20,
              backgroundColor: Colors.primary,
            }}
            maximumTrackTintColor={Colors.white}
            minimumTrackTintColor={Colors.primary}
          />
        </View>

        <View style={styles.value}>
          <TextView customStyles={styles.fontStyles}>{val}</TextView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 30,
  },
  title: {
    fontSize: 18,
  },
  wrapper: {
    flexDirection: 'row',
  },
  slider: {
    width: '75%',
  },
  value: {
    width: '25%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.white,
    padding: 10,
    paddingHorizontal: 25,
    marginLeft: 15,
    textAlign: 'center',
  },
  fontStyles: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SliderView;
