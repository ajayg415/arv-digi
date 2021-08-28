import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

import {TextView} from '.';

import Colors from '../../constants/Colors';

interface PieChartProps {
  value: number;
  title: string;
  min?: number;
  max?: number;
}

const PieChartView = ({value, title, min = 0, max = 100}: PieChartProps) => {
  const data = [
    {
      key: 1,
      value,
      svg: {fill: Colors.primary},
      arc: {
        outerRadius: 50,
      },
    },
    {
      key: 2,
      value: max - value,
      svg: {fill: Colors.secondary},
      arc: {
        outerRadius: 50,
      },
    },
  ];

  const deviceWidth = Dimensions.get('window').width;
  return (
    <View style={styles.screen}>
      <PieChart
        style={{height: 250}}
        valueAccessor={({item}) => item.value}
        data={data}>
        {/* <TextView
          customStyles={{
            position: 'absolute',
            left: deviceWidth / 2 - 15,
            top: 370,
            textAlign: 'center',
          }}>
          {title}
        </TextView> */}
      </PieChart>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 1,
  },
});

export default PieChartView;
