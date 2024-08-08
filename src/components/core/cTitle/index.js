import React from 'react';
import {StyleSheet} from 'react-native';
import {CText} from '_components/index';

const CTitle = ({style, txt, ...props}) => {
  return <CText style={[styles.header, style]} txt={txt} {...props} />;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default CTitle;
