import { useState, useRef } from "react"

enum Operadores {
  sumar, restar, multiplicar, dividir
}

const useCalculadora = () => {
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
        if (num1 === 0 || num2 === 0) {
          break;
        } else {
          setNumero(`${num2 / num1}`)
        }
        break;
    }
    setNumeroAnterior('0');
  }

  return {
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
  }
}

export default useCalculadora