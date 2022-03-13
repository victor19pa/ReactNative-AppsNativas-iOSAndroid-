import React from 'react'
import { Text, View } from 'react-native';
import BotonCalculadora from '../components/BotonCalculadora';
import useCalculadora from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';
import CuerpoCalculadora from '../components/organism/CuerpoCalculadora';

const Calculadora = () => {
  const {
    numeroAnterior,
    numero,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {(numeroAnterior !== '0') && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit //true
      >
        {numero}
      </Text>

      <CuerpoCalculadora />

    </View>
  )
}
export default Calculadora