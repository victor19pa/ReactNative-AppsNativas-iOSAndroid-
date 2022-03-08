import { useState } from 'react'

const useCounter = ( inicial: number = 10) => {
  const [valor, setValor] = useState(inicial);

  const acumular = (numero: number) => {
    setValor(valor+1);
  }
  
  return{
    valor,
    acumular
  }
}

export default useCounter