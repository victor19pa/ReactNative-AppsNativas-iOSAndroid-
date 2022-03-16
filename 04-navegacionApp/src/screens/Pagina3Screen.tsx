import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { };

const Pagina3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={{ color: 'black' }}>Pagina3Screen</Text>

      <Button
        title='Regresar'
        onPress={() => navigation.pop()}
      />
      <Button
        title='Ir a inicio'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

export default Pagina3Screen