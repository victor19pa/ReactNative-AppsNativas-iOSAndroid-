import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

//const { width, height } = Dimensions.get('window');

const Dimensiones = () => {

  const { width, height } = useWindowDimensions();
  return (
    <View>
    <View style={styles.container}>
      <View style={{
        ...styles.cajaMorada,
        width: width *0.20
        }}>

      </View>
      <View style={{}}>

      </View>
    </View>
    <Text style={styles.titulo}>W: {width} , H: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    width: 50,
    height: 50,
  },
  titulo:{
    fontSize: 30,
    textAlign: 'center'
  }
});

export default Dimensiones