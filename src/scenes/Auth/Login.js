import React, {useState} from 'react';
import {Screen} from '_scenes/base';
import {colors} from '_theme/index';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import Banner from '_assets/svg/banner.svg';
import {CButton, CInput, CPasswordInput, CText} from '_components/index';
import Gradient from '_components/atoms/Auth/Gradient';
import useAPI from '_utils/hooks/useAPI';
import {useDispatch} from 'react-redux';
import {authentication} from '_redux/app/actions';
import {handleRequestErrors} from '_utils/helpers/functions';
import CBack from '_components/chore/back';
import CKeyboardAvoidingView from '_components/chore/keyboardAvoidingView';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {makeRequest} = useAPI();
  const dispatch = useDispatch();

  const login = async () => {
    Keyboard.dismiss();
    setLoading(true);
    try {
      const res = await makeRequest('POST', '/auth/login', {
        email,
        password,
      });
      dispatch(authentication(res.tokenData));
    } catch (e) {
      handleRequestErrors(e);
    } finally {
      setLoading(false);
    }
  };

  const goToRegister = () => {
    navigation.replace('Register');
  };

  return (
    <Screen>
      <Gradient>
        <CBack containerStyle={{paddingHorizontal: 20}} />
        <CKeyboardAvoidingView containerStyle={styles.container}>
          <Banner />
          <CText txt="WELCOME TO DOLLAP" />
          <View style={styles.inputContainer}>
            <CInput
              value={email}
              textContentType="oneTimeCode"
              keyboardType="email-address"
              onChangeText={setEmail}
              placeholder="EMAIL"
            />
            <CPasswordInput
              value={password}
              onChangeText={setPassword}
              placeholder="PASSWORD"
            />
            <CButton text="LOGIN" onPress={login} loading={loading} />
          </View>
          <CText txt="FORGOT PASSWORD" />
          <CText style={{fontSize: 12}}>
            <CText txt="DON'T HAVE AN ACCOUNT?" style={styles.text} />{' '}
            <Text
              style={styles.link}
              children="SIGNUP"
              onPress={goToRegister}
            />
          </CText>
        </CKeyboardAvoidingView>
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

export default LoginScreen;
