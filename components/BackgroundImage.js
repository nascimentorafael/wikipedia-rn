import React, { Component } from 'react';
import { Image } from 'react-native';
import s  from '../styles/BackgroundImage';

export const BackgroundImage = ({ source }) => (
  <Image
    source={source}
    style={s.root}
  />
);

BackgroundImage.defaultProps = {
  source: require('./../assets/bg2.png'),
};

export default BackgroundImage;
