import React, {useEffect, useMemo} from 'react';
import {ActivityIndicator, Platform, StyleSheet, View} from 'react-native';
import {colors} from '_theme/';
import {CText} from '_components/index';
import {layoutAnimationY} from '_utils/helpers/functions';

const SheetLoader = () => (
  <View style={styles.loaderRoot}>
    <ActivityIndicator
      size={Platform.select({
        ios: 'large',
        android: 100,
      })}
      color={colors.primaryLight}
    />
    <CText txt="Please wait" style={styles.loaderText} />
  </View>
);

const BaseBottomSheetView = ({children, loading, ...props}) => {
  const renderedChildren = useMemo(() => {
    if (loading) {
      return <SheetLoader />;
    }

    return children;
  }, [children, loading]);

  useEffect(() => {
    layoutAnimationY();
  }, [props.style]);

  return (
    <View style={styles.flexEnd}>
      <View style={styles.header}>
        <View style={styles.headerNotch} />
      </View>
      <View {...props}>{renderedChildren}</View>
    </View>
  );
};

export default BaseBottomSheetView;

const styles = StyleSheet.create({
  headerNotch: {
    height: 6,
    width: 56,
    backgroundColor: colors.grey,
    borderRadius: 30,
    margin: 16,
  },
  header: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.grey,
    backgroundColor: colors.white,
  },
  loaderRoot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 48,
  },
  loaderText: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '500',
    color: colors.primary,
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
});
