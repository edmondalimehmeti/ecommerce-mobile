import React from 'react';
import {Platform, StyleSheet, KeyboardAvoidingView} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
});

const CKeyboardAvoidingView = ({containerStyle = {}, children}) => {
  return (
    <KeyboardAvoidingView
      style={[styles.container, containerStyle]}
      behavior={'padding'}
      enabled={Platform.OS === 'ios'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 50}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default CKeyboardAvoidingView;
