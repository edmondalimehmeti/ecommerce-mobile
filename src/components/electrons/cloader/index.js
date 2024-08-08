import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {colors} from '_theme/';
import {Easing} from 'react-native-reanimated';
import CustomSpinner from '_assets/svg/spinner.svg';

const SpinningSvgComponent = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotateValue]);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <Animated.View style={{transform: [{rotate}]}}>
      <CustomSpinner width={50} height={50} />
    </Animated.View>
  );
};

const CLoader = ({loading}) => (
  <Spinner
    overlayColor={'rgba(256, 256, 256, 0.5)'}
    visible={loading}
    size={80}
    color={colors.primary}
    customIndicator={<SpinningSvgComponent />}
  />
);

export default CLoader;
