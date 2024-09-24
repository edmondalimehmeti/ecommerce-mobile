import React, {useState} from 'react';
import {Screen} from '_scenes/base';
import {colors} from '_theme/index';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Text, View} from 'react-native';
import Banner from '_assets/svg/banner.svg';
import {CButton, CInput, CPasswordInput, CText} from '_components/index';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {};

  return (
    <Screen>
      <LinearGradient
        colors={[colors.lightGreen, colors.white]}
        start={{x: 0, y: 0.1}}
        style={styles.container}
        end={{x: 0, y: 0.8}}>
        <Banner />
        <CText txt="WELCOME TO DOLLAP" />
        <View style={styles.inputContainer}>
          <CInput value={email} onChangText={setEmail} placeholder="EMAIL" />
          <CPasswordInput
            value={password}
            onChangText={setPassword}
            placeholder="Password"
          />
          <CButton text="LOGIN" onPress={login} />
        </View>
        <CText txt="FORGOT PASSWORD" />
        <CText style={{fontSize: 12}}>
          <CText txt="DON'T HAVE AN ACCOUNT?" style={styles.text} />{' '}
          <Text style={styles.link} children="SIGNUP" />
        </CText>
      </LinearGradient>
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

export default LoginScreen;
