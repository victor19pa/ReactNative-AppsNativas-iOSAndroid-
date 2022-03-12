import React from 'react'
import { View, StyleSheet } from 'react-native';

const Position = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaverde} />
      <View style={styles.cajamorada} />
      <View style={styles.cajanaranja} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28C4D9',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  cajamorada: {
    backgroundColor: '#5856D6',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  cajanaranja: {
    backgroundColor: '#F0A23B',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cajaverde: {
    backgroundColor: 'green',
    // width: 100,
    // height: 100,
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // left:0,
    // top:0,
    // right: 0
    ...StyleSheet.absoluteFillObject

  }
});

export default Position