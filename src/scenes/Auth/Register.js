import React, {useState} from 'react';
import {Screen} from '_scenes/base';
import {colors} from '_theme/index';
import {StyleSheet, Text, View} from 'react-native';
import Banner from '_assets/svg/banner.svg';
import {CButton, CInput, CPasswordInput, CText} from '_components/index';
import Gradient from '_components/atoms/Auth/Gradient';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const login = () => {};

  const goToLogin = () => {
    navigation.replace('Register');
  };

  return (
    <Screen>
      <Gradient style={styles.container}>
        <Banner />
        <CText txt="WELCOME TO DOLLAP" />
        <View style={styles.inputContainer}>
          <CInput value={name} onChangeText={setName} placeholder="NAME" />
          <CInput value={email} onChangeText={setEmail} placeholder="EMAIL" />
          <CPasswordInput
            value={password}
            onChangeText={setPassword}
            placeholder="PASSWORD"
          />
          <CButton text="REGISTER" onPress={login} />
        </View>
        <CText style={{fontSize: 12}}>
          <CText txt="DON'T HAVE AN ACCOUNT?" style={styles.text} />{' '}
          <Text style={styles.link} children="SIGNUP" onPress={goToLogin} />
        </CText>
      </Gradient>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 30,
  },
  text: {fontWeight: '500', fontSize: 12},
  link: {color: colors.green, fontWeight: '700'},
  inputContainer: {width: 250, rowGap: 15},
});

export default RegisterScreen;
