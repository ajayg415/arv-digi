import React, {useState, useEffect} from 'react';
import {Button, View, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import {Text} from 'react-native-elements';

import {TextView, HeaderView, SliderView, PieChartView} from '../components';
import Colors from '../../constants/Colors';
import {Categories} from '../types';

import data from '../../server/db.json';

const Spends = ({navigation: {openDrawer}}) => {
  const [categories, setCategories] = useState<Categories[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const call = await axios(`http://localhost:5000/categories/`);
        setCategories(await call);
      } catch (e) {
        setCategories(data.categories);
      }
    })();
  }, []);
  return (
    <View style={styles.screen}>
      <ScrollView>
        <HeaderView openDrawer={openDrawer}>
          <Text h2 style={styles.header}>
            ARV Case Study
          </Text>
        </HeaderView>

        <View style={styles.sliders}>
          {categories.map((cat: Categories) => {
            return (
              <SliderView
                sliderValue={cat.value}
                min={cat.min}
                max={cat.max}
                title={cat.name}
                key={cat.id}
              />
            );
          })}
        </View>

        <View style={styles.submit}>
          <Button
            title="Submit"
            color={Colors.primary}
            onPress={() => console.log('pressed')}
          />
        </View>

        <View style={styles.charts}>
          {categories.map((cat: Categories) => {
            return (
              <PieChartView
                value={cat.value}
                min={cat.min}
                max={cat.max}
                title={cat.name}
                key={cat.id}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    color: '#fff',
  },
  sliders: {
    flex: 1,
    marginTop: 10,
  },
  submit: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  charts: {
    justifyContent: 'space-between',
  },
  header: {
    textAlign: 'center',
    color: Colors.white,
  },
});

export default Spends;
