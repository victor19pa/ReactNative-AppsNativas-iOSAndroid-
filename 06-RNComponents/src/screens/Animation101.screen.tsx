import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import useFade from '../hooks/useFade';

const Animation101 = () => {
  const { fadeIn, fadeOut, opacityRef } = useFade();

  return (
    <View style={styles.container}>
      <Animated.View style={{
        ...styles.purbleBox,
        marginBottom: 20,
        opacity: opacityRef,
      }}
      />
      <Button
        title='Fade In'
        onPress={fadeIn}
      />
      <Button
        title='Fade Out'
        onPress={fadeOut}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  purbleBox: {
    backgroundColor: '#5856d6',
    width: 150,
    height: 150
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Animation101