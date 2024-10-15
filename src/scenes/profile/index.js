import React, {useEffect, useState} from 'react';
import {SafeAreaViewScreen} from '_scenes/base';
import CBack from '_components/chore/back';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {CButton, CDateInput, CInput} from '_components/index';
import {colors} from '_theme/index';
import moment from 'moment';
import useAPI from '_utils/hooks/useAPI';
import {handleRequestErrors, showSuccess} from '_utils/helpers/functions';

const ProfileScreen = () => {
  const {makeRequest} = useAPI();
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthdate, setBirthdate] = useState(moment().toISOString());
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await makeRequest('GET', '/user');
      console.log(res);
      setFullName(res.name);
      setEmail(res.email);
      if (res.birthdate) {
        setBirthdate(moment(res.birthdate).toISOString());
      }
    } catch (e) {
      handleRequestErrors(e);
    } finally {
      setLoading(false);
    }
  };

  const saveData = async () => {
    setSubmitting(true);
    try {
      const res = await makeRequest('POST', '/user', {
        email,
        birthdate,
        fullName,
      });
      showSuccess(res.message);
    } catch (e) {
      handleRequestErrors(e);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaViewScreen
      loading={loading}
      style={{backgroundColor: colors.background}}>
      <View style={{paddingHorizontal: 20}}>
        <CBack title="Profile" />
        <KeyboardAvoidingView style={{marginTop: 40}}>
          <CInput
            label="Full Name"
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />
          <CInput
            label="Email Address"
            style={styles.input}
            value={email}
            editable={false}
            onChangeText={setEmail}
          />
          <CDateInput
            label="Date of birth"
            style={styles.input}
            onChange={setBirthdate}
            value={birthdate}
          />
          <CButton
            text="Save"
            containerStyle={{marginTop: 20}}
            onPress={saveData}
            loading={submitting}
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaViewScreen>
  );
};

const styles = StyleSheet.create({
  mx20: {marginHorizontal: 20},
  input: {
    borderBottomWidth: 1,
    borderWidth: 0,
    backgroundColor: colors.background,
    borderBottomColor: colors.black,
    marginBottom: 15,
  },
});

export default ProfileScreen;
