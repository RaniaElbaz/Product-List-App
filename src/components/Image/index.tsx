import FastImage, { FastImageProps } from '@d11/react-native-fast-image';
import React from 'react';

const Image = ({ source, style, resizeMode }: FastImageProps) => {
  return (
    <FastImage
      style={style}
      source={source}
      resizeMode={resizeMode ?? 'contain'}
    />
  );
};

export default Image;
