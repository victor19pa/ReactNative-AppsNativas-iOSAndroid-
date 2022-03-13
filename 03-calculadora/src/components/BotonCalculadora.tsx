import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  texto: string,
  color?: string,
  ancho?: boolean,
  handleClick: ( numeroTxt: string ) => void,
}

const BotonCalculadora = ({ texto, color = '#2D2D2D', ancho = false, handleClick }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={ () => handleClick(texto) }
    >
      <View
        style={[
          styles.boton,
          { backgroundColor: color },
          { width: (ancho) ? 180 : 80 }
        ]}
      >
        <Text
          style={[
            styles.botonTxt,
            { color: (color === '#9B9B9B') ? 'black' : 'white' }
          ]}
        >
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default BotonCalculadora