import { Theme } from '@src/common/theme';
import React, { memo } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import Header from '../header';

const Background = ({ children, isButtonBack, relative = false }) => (
  <View style={styles.background}>
    <Header
      isBack={true}
      isBorder={true}
      isRight={false}
      styleRoot={{ backgroundColor: Theme.backgrounds.transparent }}
    />

    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: 'center' }}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  </View>
);

export default memo(Background);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Theme.backgrounds.white,
    paddingTop: Platform.OS === 'ios' ? 44 : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
});
