import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ mode, style, children, ...props }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 15,
    elevation: 0,
    borderWidth: 0,
    padding: 10,
  },
});
