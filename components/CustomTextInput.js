import React from 'react';
import { View, TextInput } from 'react-native';
import s  from '../styles/CustomTextInput';

export const CustomTextInput = ({ placeholder, onChangeText, secureTextEntry, containerStyle }) => (
  <View style={[s.wrapper, containerStyle]}>
    <TextInput
      style={s.textinput}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

CustomTextInput.defaultProps = {
  secureTextEntry: false
};

export default CustomTextInput;