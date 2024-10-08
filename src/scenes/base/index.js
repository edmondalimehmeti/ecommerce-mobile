import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StatusBar, SafeAreaView} from 'react-native';
import {CLoader} from '_components/index';
import {colors} from '_theme/index';

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

export const SafeAreaViewScreen = ({style, children, loading = false}) => {
  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={[styles.root]}>
        <SafeAreaView style={[styles.container, style]}>
          {children}
        </SafeAreaView>
      </View>
      <CLoader loading={!!loading} />
    </>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: colors.white},
  container: {flex: 1},
});
