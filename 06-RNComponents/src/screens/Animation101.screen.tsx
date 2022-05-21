import React, { useContext, useRef } from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import useFade from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Animation101 = () => {
  const { fadeIn, fadeOut, opacityRef, position, startPosition } = useFade();
  const { theme: { colors } } = useContext(ThemeContext)
  return (
    <View style={styles.container}>
      <Animated.View style={{
        ...styles.purbleBox,
        marginBottom: 20,
        backgroundColor: colors.primary,
        opacity: opacityRef,
        transform: [{
          translateY: position
        }]
      }}
      />
      <Button
        title='Fade In'
        onPress={() => {
          fadeIn();
          startPosition(-100, 700);
        }}
        color={colors.primary}
      />
      <Button
        title='Fade Out'
        onPress={fadeOut}
        color={colors.primary}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  purbleBox: {
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