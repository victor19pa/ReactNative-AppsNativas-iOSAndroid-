import React, { useState } from 'react'
import { Text, SafeAreaView, View } from 'react-native';
import BotonCalculadora from '../components/BotonCalculadora';
import { styles } from '../theme/appTheme';

const Calculadora = () => {

  const [numeroAnterior, setNumeroAnterior] = useState('0')
  const [numero, setNumero] = useState('0')

  const limpiar = () => {
    setNumero('0');
  }

  const armarNumero = (numeroTxt: string) => {
    setNumero(numero + numeroTxt)
  }

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      <Text 
        style={styles.resultado}
        numberOfLines={ 1 }
        adjustsFontSizeToFit //true
      >
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalculadora texto='C' color='#9B9B9B' handleClick={limpiar} />
        <BotonCalculadora texto='+/-' color='#9B9B9B' handleClick={limpiar} />
        <BotonCalculadora texto='del' color='#9B9B9B' handleClick={limpiar} />
        <BotonCalculadora texto='/' color='#FF9427' handleClick={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto='7' handleClick={armarNumero} />
        <BotonCalculadora texto='8' handleClick={armarNumero} />
        <BotonCalculadora texto='9' handleClick={armarNumero} />
        <BotonCalculadora texto='X' color='#FF9427' handleClick={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto='4' handleClick={armarNumero} />
        <BotonCalculadora texto='5' handleClick={armarNumero} />
        <BotonCalculadora texto='6' handleClick={armarNumero} />
        <BotonCalculadora texto='/' color='#FF9427' handleClick={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto='1' handleClick={armarNumero} />
        <BotonCalculadora texto='2' handleClick={armarNumero} />
        <BotonCalculadora texto='3' handleClick={armarNumero} />
        <BotonCalculadora texto='+' color='#FF9427' handleClick={limpiar} />
      </View>

      <View style={styles.fila}>
        <BotonCalculadora texto='0' ancho handleClick={armarNumero} />
        <BotonCalculadora texto='.' handleClick={armarNumero} />
        <BotonCalculadora texto='=' color='#FF9427' handleClick={limpiar} />
      </View>

    </View>
  )
}
export default Calculadora