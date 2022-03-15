import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeightScreen, Theme } from '@src/common/theme';
import TabBarIcon from '@src/components/tab-bar-icon';
import { Router } from '@src/navigation/router';
import Profile from '@src/features/auth/screens/profile';
import { HomeAuth } from '@src/features/auth/screens';
import HomeScreen from '@src/features/category/home';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CartScreen from '@src/features/category/cart';
const Tab = createBottomTabNavigator();

function DetailScreen() {
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text>DetailScreen</Text>
    </View>
  );
}

const TabBarBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIconStyle: { width: 100 },
        tabBarStyle: styles.tabNavigator,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={Router.Shop} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="HomeAuth"
        component={HomeAuth}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={Router.Heart} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={DetailScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Theme.colors.white,
                borderColor: Theme.colors.primaryOg,
                borderWidth: 5,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}
            >
              <Icon
                name="search"
                color={Theme.colors.primaryOg}
                size={28}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={Router.Cart} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name={Router.Profile} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: Theme.backgrounds.white,
    paddingBottom: 15,
    paddingVertical: 10,
    height: HeightScreen * 0.09,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    position: 'absolute',
    paddingHorizontal: 8,
  },
});

export default TabBarBottom;
