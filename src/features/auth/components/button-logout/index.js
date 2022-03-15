import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Theme } from '@src/common/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '@src/components/Button';
const ButtonLogOut = () => {
  return (
    <View style={styles.buttonLogOutContainer}>
      <Button
        style={{
          backgroundColor: Theme.backgrounds.paper,
        }}
        onPress={() => {
          console.log('logout');
        }}
      >
        <View style={styles.buttonLogOut}>
          <Icon
            name="md-log-out-outline"
            size={25}
            color={Theme.colors.green}
          />
          <Text style={styles.text}>Log Out</Text>
          <Icon
            name="md-log-out-outline"
            size={25}
            color={Theme.backgrounds.paper}
          />
        </View>
      </Button>
    </View>
  );
};

export default ButtonLogOut;

const styles = StyleSheet.create({
  buttonLogOutContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonLogOut: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: Theme.fontFamily.GilroyExtraBold,
    fontSize: 15,
    fontWeight: '500',
    color: Theme.colors.primary,
  },
});
