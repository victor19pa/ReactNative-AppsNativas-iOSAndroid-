import React, { useRef } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native'

const Animation102 = () => {

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: pan.x, dy: pan.y, },
    ], {
      useNativeDriver: false
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.purbleBox]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  purbleBox: {
    backgroundColor: '#75cedb',
    width: 150,
    height: 150
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Animation102;