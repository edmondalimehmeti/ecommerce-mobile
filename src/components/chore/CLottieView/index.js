import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';

const CLottieView = ({onClose, ...props}) => {
  const animationRef = useRef(null);

  useEffect(() => {
    setTimeout(() => animationRef?.current?.play(), 100);
  }, []);

  return <LottieView ref={animationRef} {...props} />;
};

export default CLottieView;
