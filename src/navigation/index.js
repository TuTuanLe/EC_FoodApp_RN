import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBarBottom from './screens/tab-bar-bottom';
import {
  Login,
  ForgetPassword,
  Register,
} from '@src/features/auth/screens';
import { Router } from './router';
import OnBoardScreen from './screens/on-board';
import DetailScreen from '@src/features/category/detail';

const configTabOther = {
  animation: 'timing',
  config: {
    duration: 300,
  },
};

const Stack = createNativeStackNavigator();

const route = [
  { name: Router.Login, component: Login },
  { name: Router.Register, component: Register },
  { name: Router.ForgetPassword, component: ForgetPassword },
];

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="onBoard" component={OnBoardScreen} />
      <Stack.Screen name="TabBarBottom" component={TabBarBottom} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      {route.map((stack, index) => (
        <Stack.Screen
          key={index}
          name={stack.name}
          component={stack.component}
          options={{
            transitionSpec: {
              open: configTabOther,
              close: configTabOther,
            },
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigation;
