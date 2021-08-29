import React, {useState} from 'react';
import {View, StyleSheet, Button, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';

import {TextView, HeaderView, TextBoxView, OverlayView} from '../components';
import Colors from '../../constants/Colors';

const ContactUs = ({navigation: {goBack, openDrawer}}) => {
  const [modal, setModal] = useState(false);

  const setShow = (val: boolean) => setModal(val);
  return (
    <View style={styles.screen}>
      <HeaderView openDrawer={openDrawer}>
        <View style={styles.header}>
          <Text h4 style={styles.title}>
            Contact Us
          </Text>
          <TextView customStyles={styles.back} onPress={goBack}>
            Back
          </TextView>
        </View>
      </HeaderView>
      <ScrollView>
        <View style={styles.form}>
          <TextView>
            Fill up the form and our team will get back to you in 24 hours.
          </TextView>
          <TextBoxView placeholder="Name" />
          <TextBoxView placeholder="Phone Number" keyboardType="numeric" />
          <TextBoxView placeholder="Email Address" />
          <TextBoxView placeholder="Your Message" numberOfLines={4} />

          <View style={styles.submit}>
            <Button
              title="Send Message"
              color={Colors.primary}
              onPress={() => setShow(true)}
            />
          </View>
        </View>
      </ScrollView>

      <OverlayView show={modal} setShow={setShow} />
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
  form: {
    marginHorizontal: 20,
  },
  submit: {
    marginTop: 20,
  },
});

export default ContactUs;
