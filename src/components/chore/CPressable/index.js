import React from 'react';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';

const CPressable = ({
  style,
  outputMax = 1.1,
  activeOpacity = 1,
  children,
  onPress,
  ...props
}) => {
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, outputMax];
  const scale = animation.interpolate({inputRange, outputRange});

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[style, {transform: [{scale}]}]}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        style={styles.root}
        {...props}>
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
};
export default CPressable;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
