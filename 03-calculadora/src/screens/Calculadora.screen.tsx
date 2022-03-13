import React from 'react'
import { Text, SafeAreaView, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Calculadora = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>

      <View>
        {/*Boton */}
        <View style={styles.boton}>
          <Text style={styles.botonTxt}>1</Text>
        </View>
      </View>
    </View>
  )
}
export default Calculadora