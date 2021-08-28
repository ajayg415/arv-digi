import React, {useState, useEffect} from 'react';
import {Button, View, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';

import {TextView, HeaderView, SliderView} from '../components';
import Colors from '../../constants/Colors';
import {Categories} from '../types';

import data from '../../server/db.json';

const Spends = () => {
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
        <HeaderView title="ARV Case Study" />
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
});

export default Spends;
