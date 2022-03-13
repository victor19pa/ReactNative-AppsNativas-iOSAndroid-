import React from 'react'
import { Text, View } from 'react-native';
import BotonCalculadora from '../components/BotonCalculadora';
import useCalculadora from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';

const Calculadora = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
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

      <View style={styles.fila}>
        <BotonCalculadora texto='C' color='#9B9B9B' handleClick={limpiar} />
        <BotonCalculadora texto='+/-' color='#9B9B9B' handleClick={positivoNegativo} />
        <BotonCalculadora texto='del' color='#9B9B9B' handleClick={btnDelete} />
        <BotonCalculadora texto='/' color='#FF9427' handleClick={btnDividir} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto='7' handleClick={armarNumero} />
        <BotonCalculadora texto='8' handleClick={armarNumero} />
        <BotonCalculadora texto='9' handleClick={armarNumero} />
        <BotonCalculadora texto='X' color='#FF9427' handleClick={btnMultiplicar} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto='4' handleClick={armarNumero} />
        <BotonCalculadora texto='5' handleClick={armarNumero} />
        <BotonCalculadora texto='6' handleClick={armarNumero} />
        <BotonCalculadora texto='-' color='#FF9427' handleClick={btnRestar} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto='1' handleClick={armarNumero} />
        <BotonCalculadora texto='2' handleClick={armarNumero} />
        <BotonCalculadora texto='3' handleClick={armarNumero} />
        <BotonCalculadora texto='+' color='#FF9427' handleClick={btnSumar} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto='0' handleClick={armarNumero} ancho />
        <BotonCalculadora texto='.' handleClick={armarNumero} />
        <BotonCalculadora texto='=' color='#FF9427' handleClick={calcular} />
      </View>

    </View>
  )
}
export default Calculadora