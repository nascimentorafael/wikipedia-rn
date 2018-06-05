import React from 'react';
import { View, Button } from 'react-native';
import s  from '../styles/CustomButton';

export const CustomButton = ({ onPress, title, textColor }) => (
  <View style={s.wrapper}>
      <Button
        onPress={onPress}
        title={title}
        color={textColor}
      />
  </View>
);

CustomButton.defaultProps = {
  color: 'black',
};

export default CustomButton;