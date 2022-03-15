import React from 'react';
import { Theme } from '@common/theme';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import AppNavigation from './navigation';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={{ flex: 1, backgroundColor: Theme.backgrounds.white }}>
      <StatusBar
        backgroundColor={Theme.colors.white}
        barStyle={'dark-content'}
      />
      <AppNavigation />
      <Toast />
    </View>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});
