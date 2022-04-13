import React, {useRef} from 'react';
import {Animated, Easing} from 'react-native';

const useFade = () => {
  const opacityRef = useRef(new Animated.Value(0.4)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacityRef, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('animacion termino'));

    Animated.timing(top, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
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
    top,
    fadeIn,
    fadeOut,
  };
};

export default useFade;
