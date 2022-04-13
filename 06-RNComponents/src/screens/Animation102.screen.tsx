import React from 'react'
import { StyleSheet, View } from 'react-native'

const Animation102 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purbleBox}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  purbleBox: {
    backgroundColor: 'red',
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