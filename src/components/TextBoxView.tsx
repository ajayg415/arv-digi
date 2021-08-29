import React, {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

import Colors from '../../constants/Colors';

interface TextBoxViewProps {
  placeholder: string;
  keyboardType?: any;
  numberOfLines?: number;
}

const TextBoxView = ({placeholder, ...props}: TextBoxViewProps) => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        value={value}
        placeholderTextColor={Colors.textBoxPlaceHolder}
        placeholder={placeholder}
        onChangeText={setValue}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // marginHorizontal: 20,
  },
  input: {
    marginVertical: 12,
    borderWidth: 1,
    padding: 20,
    color: 'white',
    backgroundColor: Colors.textBox,
  },
});

export default TextBoxView;
