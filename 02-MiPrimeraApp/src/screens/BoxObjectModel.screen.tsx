import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title:{
    fontSize: 20,
    borderWidth: 10,
    paddingHorizontal: 130,
    paddingVertical: 50,
    marginVertical: 40,
    marginHorizontal: 20
  }
});

export default BoxObjectModel