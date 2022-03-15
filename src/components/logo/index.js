import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
const Logo = ({ style, ...props }) => {
  return (
    <Image
      source={require('@src/assets/images/carrot.png')}
      style={[styles.image, style]}
    />
  );
};

export default memo(Logo);

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 20,
  },
});
