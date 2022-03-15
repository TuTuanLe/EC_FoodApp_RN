import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Theme } from '@src/common/theme';
import Background from '@src/components/background';
import InputCustom from '@src/components/InputCustom';
import Logo from '@src/components/logo';

import { View, Text, TouchableOpacity } from 'react-native';
import Button from '@src/components/Button';
import { Router } from '@src/navigation/router';
const Register = () => {
  const navigation = useNavigation();
  let ref_input1 = useRef();
  let ref_input2 = useRef();
  let ref_input3 = useRef();
  let ref_input4 = useRef();
  let ref_input5 = useRef();
  let ref_input6 = useRef();

  const temp = { value: '', error: '' };
  const [email, setEmail] = useState(temp);
  const [password, setPassword] = useState(temp);
  const [userName, SetUserName] = useState(temp);
  const [fullName, SetFullName] = useState(temp);
  const [cfPassword, setCfPassword] = useState(temp);

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
        Create Account
      </Text>
      <InputCustom
        label="Username"
        returnKeyType="next"
        inputRef={(ref) => (ref_input1.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input2.current.focus()}
        value={userName.value}
        onChangeText={(text) => SetUserName({ value: text, error: '' })}
        errorText={userName.error}
      />
      <InputCustom
        label="FullName"
        returnKeyType="next"
        inputRef={(ref) => (ref_input2.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input3.current.focus()}
        value={fullName.value}
        onChangeText={(text) => SetFullName({ value: text, error: '' })}
        errorText={fullName.error}
      />
      <InputCustom
        label="Email"
        returnKeyType="next"
        inputRef={(ref) => (ref_input3.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input4.current.focus()}
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        errorText={email.error}
      />
      <InputCustom
        label="Password"
        returnKeyType="next"
        inputRef={(ref) => (ref_input4.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input5.current.focus()}
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        errorText={password.error}
        isPwd
      />
      <InputCustom
        label="Confirm Password"
        returnKeyType="next"
        inputRef={(ref) => (ref_input5.current = ref)}
        autoFocus={false}
        blurOnSubmit={false}
        onSubmitEditing={() => ref_input6.current.focus()}
        value={cfPassword.value}
        onChangeText={(text) => setCfPassword({ value: text, error: '' })}
        errorText={cfPassword.error}
        isPwd
      />

      <Button
        style={{ backgroundColor: Theme.colors.green, marginTop: 15 }}
      >
        <Text
          style={{
            color: Theme.backgrounds.white,
            fontSize: 17,
            fontWeight: '500',
          }}
        >
          Register
        </Text>
      </Button>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text>Already have an account ? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(Router.Login)}
        >
          <Text
            style={{
              color: Theme.colors.green,
              fontWeight: '500',
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default Register;
