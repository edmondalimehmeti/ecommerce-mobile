import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StatusBar, SafeAreaView} from 'react-native';
import {CLoader} from '_components/index';
import {colors} from '_theme/index';

export const SafeAreaViewScreen = ({style, children, loading = false}) => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <SafeAreaView style={[styles.root]}>
        <View style={[styles.container, style]}>{children}</View>
      </SafeAreaView>
      <CLoader loading={!!loading} />
    </>
  );
};
export const Screen = ({style, children, loading = false}) => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={[styles.root]}>
        <View style={[styles.container, style]}>{children}</View>
      </View>
      <CLoader loading={!!loading} />
    </>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#F6F6F2'},
  container: {flex: 1},
});
