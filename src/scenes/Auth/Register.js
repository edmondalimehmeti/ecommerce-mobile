import React, {useState} from 'react';
import {Screen} from '_scenes/base';
import {colors} from '_theme/index';
import {StyleSheet, Text, View} from 'react-native';
import Banner from '_assets/svg/banner.svg';
import {CButton, CInput, CPasswordInput, CText} from '_components/index';
import Gradient from '_components/atoms/Auth/Gradient';
import useAPI from '_utils/hooks/useAPI';
import CKeyboardAvoidingView from '_components/chore/keyboardAvoidingView';
import CBack from '_components/chore/back';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {makeRequest} = useAPI();

  const register = async () => {
    setIsLoading(true);
    try {
      const res = await makeRequest('POST', '/auth/register', {
        email,
        password,
        name,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const goToLogin = () => {
    navigation.replace('Login');
  };

  return (
    <Screen>
      <Gradient>
        <CBack style={{paddingHorizontal: 20}} />
        <CKeyboardAvoidingView containerStyle={styles.container}>
          <Banner />
          <CText txt="WELCOME TO DOLLAP" />
          <View style={styles.inputContainer}>
            <CInput value={name} onChangeText={setName} placeholder="NAME" />
            <CInput
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
              placeholder="EMAIL"
            />
            <CPasswordInput
              value={password}
              onChangeText={setPassword}
              placeholder="PASSWORD"
            />
            <CButton text="REGISTER" onPress={register} loading={isLoading} />
          </View>
          <CText style={{fontSize: 12}}>
            <CText txt="DON'T HAVE AN ACCOUNT?" style={styles.text} />{' '}
            <Text style={styles.link} children="SIGNUP" onPress={goToLogin} />
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

export default RegisterScreen;
