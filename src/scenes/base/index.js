import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StatusBar, SafeAreaView} from 'react-native';
import {CLoader} from '_components/index';
import {colors} from '_theme/index';

const Screen = ({style, children, loading = false}) => {
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

export default Screen;

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: colors.white, paddingVertical: 10},
  container: {flex: 1},
});
