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
    //no doble punto
    if (numero.includes('.') && numeroTxt === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //punto decimal
      if (numeroTxt === '.') {
        setNumero(numero + numeroTxt);
      } else if (numeroTxt === '0' && numero.includes('.')) {
        //evaluar si es otro cero y hay un punto
        setNumero(numero + numeroTxt);
      } else if (numeroTxt !== '0' && !numero.includes('.')) {
        //evaluar si es diferente de 0 y no tiene punto
        setNumero(numeroTxt);
      } else if( numeroTxt === '0' && !numero.includes('.')){
        //evitar el 000.0
        setNumero( numero )
      }else{
        setNumero( numero + numeroTxt)
      }

    } else {
      setNumero(numero + numeroTxt)
    }
  }

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  }

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
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