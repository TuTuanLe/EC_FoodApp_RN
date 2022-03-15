import React from 'react';
import { Theme } from '@src/common/theme';
import Background from '@src/components/background';
import Button from '@src/components/Button';
import Logo from '@src/components/logo';

import { StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Router } from '@src/navigation/router';

const HomeAuth = () => {
  const navigation = useNavigation();
  return (
    <Background>
      <Logo />

      <Text
        style={{
          textAlign: 'center',
          fontFamily: Theme.fontFamily.QuicksandSemiBold,
          fontSize: Theme.size.large,
          paddingBottom: 20,
        }}
      >
        Get your groceries with nectar
      </Text>
      <Button
        style={{ backgroundColor: Theme.colors.primary }}
        onPress={() => navigation.navigate(Router.Login)}
      >
        <Text style={styles.text}>Login</Text>
      </Button>

      <Button
        style={{ backgroundColor: Theme.backgrounds.paper }}
        onPress={() => navigation.navigate(Router.Register)}
      >
        <Text style={[styles.text, { color: Theme.colors.primary }]}>
          Register
        </Text>
      </Button>
    </Background>
  );
};

export default HomeAuth;

const styles = StyleSheet.create({
  text: {
    color: Theme.backgrounds.white,
    fontSize: 15,
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
