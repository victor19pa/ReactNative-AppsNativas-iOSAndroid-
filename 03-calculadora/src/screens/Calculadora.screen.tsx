import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native';
import BotonCalculadora from '../components/BotonCalculadora';
import { styles } from '../theme/appTheme';

enum Operadores {
  sumar, restar, multiplicar, dividir
}

const Calculadora = () => {

  const [numeroAnterior, setNumeroAnterior] = useState('0')
  const [numero, setNumero] = useState('0')

  const ultimaOperacion = useRef<Operadores>()

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
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
      } else if (numeroTxt === '0' && !numero.includes('.')) {
        //evitar el 000.0
        setNumero(numero)
      } else {
        setNumero(numero + numeroTxt)
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

  const btnDelete = () => {
    let aux = numero.length;
    if (numero.length < 2 || (numero.includes('-') && aux <= 2)) {
      setNumero('0')
    } else {
      setNumero(numero.substring(0, aux - 1));
    }
  }

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  }

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir
  }
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar
  }
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar
  }
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar
  }

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior)

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`)
        break;

      case Operadores.restar:
        setNumero(`${num2 - num1}`)
        break;

      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`)
        break;

      case Operadores.dividir:
        if( num1 === 0 || num2 === 0){
          break;
        }else{
          setNumero(`${num2 / num1}`)
        }
        break;
    }
    setNumeroAnterior('0');
  }

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