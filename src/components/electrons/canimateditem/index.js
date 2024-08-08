import React, {useEffect, useRef} from 'react';
import {Dimensions, Animated} from 'react-native';

const width = Dimensions.get('window').width;

const CAnimatedItem = ({index, children}) => {
  let fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeIn, index]);

  return (
    <Animated.View
      style={{
        opacity: fadeIn,
        transform: [
          {
            translateX: fadeIn.interpolate({
              inputRange: [0, 1],
              outputRange: [-width, 0],
            }),
          },
        ],
      }}>
      {children}
    </Animated.View>
  );
};

export default CAnimatedItem;
