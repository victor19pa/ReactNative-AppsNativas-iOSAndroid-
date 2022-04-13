import React, { useRef } from 'react';
import { Animated, Easing } from 'react-native';

const useFade = () => {
  const opacityRef = useRef(new Animated.Value(0.4)).current;
  const position = useRef(new Animated.Value(0)).current;

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

  const startPosition = (initPosition: number, duration: number = 300) => {
    position.setValue(initPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      // easing: Easing.bounce,
    }).start();
  }

  return {
    opacityRef,
    position,
    fadeIn,
    fadeOut,
    startPosition,
  };
};

export default useFade;
