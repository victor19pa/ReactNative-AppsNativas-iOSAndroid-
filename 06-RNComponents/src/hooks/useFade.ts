import React, {useRef} from 'react';
import {Animated} from 'react-native';

const useFade = () => {
  const opacityRef = useRef(new Animated.Value(0.4)).current;

  const fadeIn = () => {
    Animated.timing(opacityRef, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('animacion termino'));
  };

  const fadeOut = () => {
    Animated.timing(opacityRef, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacityRef,
    fadeIn,
    fadeOut,
  };
};

export default useFade;
