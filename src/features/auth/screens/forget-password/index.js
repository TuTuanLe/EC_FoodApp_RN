import React, { useState } from 'react';
import { Theme } from '@src/common/theme';
import Background from '@src/components/background';
import InputCustom from '@src/components/InputCustom';
import Logo from '@src/components/logo';
import Icon from 'react-native-vector-icons/AntDesign';
import { Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { infoValidator } from '../../modules/auth.validation';
import Button from '@src/components/Button';
import { useNavigation } from '@react-navigation/native';
import { Router } from '@src/navigation/router';
const ForgetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState({ value: '', error: '' });
  const _onSendPressed = () => {
    const emailError = infoValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
  };
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
        Welcome back
      </Text>

      <InputCustom
        label="Email-address"
        returnKeyType="done"
        autoFocus={false}
        blurOnSubmit={false}
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <Button
        style={{ backgroundColor: Theme.colors.primary }}
        onPress={_onSendPressed}
        disabled={false}
      >
        {false ? (
          <ActivityIndicator
            style={{ opacity: 1 }}
            animating={true}
            size="small"
            color="#fff"
          />
        ) : (
          <Text
            style={{
              fontFamily: Theme.fontFamily.GilroySemiBold,
              color: Theme.backgrounds.white,
            }}
          >
            Send Reset Instructions
          </Text>
        )}
      </Button>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          width: '100%',
        }}
        onPress={() => navigation.navigate(Router.Login)}
      >
        <Icon name="left" size={20} color={Theme.colors.dGrey} />
        <Text style={{ paddingLeft: 10, fontSize: 17, fontWeight: '500' }}>
          Back to login
        </Text>
      </TouchableOpacity>
    </Background>
  );
};

export default ForgetPassword;
