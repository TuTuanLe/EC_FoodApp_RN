import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useLinkProps, useNavigation } from '@react-navigation/native';
import { Router } from '@src/navigation/router';
import { Theme } from '@src/common/theme';

const Header = ({
  title,
  isBack,
  onPress,
  isBorder,
  styleRoot,
  isRight = true,
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.root, styleRoot]}>
      <View style={styles.left}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          {isBack ? (
            <View
              style={[
                styles.icon,
                { marginLeft: 12 },
                isBorder
                  ? { backgroundColor: Theme.backgrounds.buttonBack }
                  : {},
              ]}
            >
              <Icon
                name="left"
                size={30}
                color={
                  isBorder
                    ? Theme.backgrounds.white
                    : Theme.colors.secondary
                }
              />
            </View>
          ) : (
            <View
              style={[
                styles.icon,
                { marginLeft: 12 },
                isBorder
                  ? { backgroundColor: Theme.backgrounds.buttonBack }
                  : {},
              ]}
            >
              <Icon
                name="clockcircleo"
                size={20}
                color={
                  isBorder
                    ? Theme.backgrounds.white
                    : Theme.colors.secondary
                }
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
      <Text
        style={[
          styles.center,
          {
            color: isBorder
              ? Theme.colors.primary
              : Theme.colors.secondary,
          },
        ]}
      >
        {title}
      </Text>
      <View style={styles.right}>
        {isRight && (
          <TouchableOpacity
            onPress={() => navigation.navigate(Router.Message)}
          >
            <View
              style={[
                styles.icon,
                { marginRight: 8 },
                isBorder
                  ? { backgroundColor: Theme.backgrounds.buttonBack }
                  : {},
              ]}
            >
              <Icon
                name="message1"
                size={20}
                color={
                  isBorder
                    ? Theme.backgrounds.white
                    : Theme.colors.secondary
                }
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? 44 + 8 : 8,
    backgroundColor: Theme.colors.primary,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    opacity: 1,
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  left: {
    flex: 0.4,
    alignItems: 'flex-start',
  },
  right: {
    flex: 0.55,
    color: Theme.colors.secondary,
  },
  icon: {
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
