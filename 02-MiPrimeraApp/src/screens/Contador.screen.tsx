import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Fab from '../components/Fab'

const ContadorScreen = () => {
  const [contador, setContador] = useState(10)


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {contador}
      </Text>

      <Fab
        title='+1'
        position={'br'}
        onPress={() => setContador(contador + 1)}
      />
      <Fab
        title='-1'
        position={'bl'}
        onPress={() => setContador(contador - 1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -15
  },

})

export default ContadorScreen