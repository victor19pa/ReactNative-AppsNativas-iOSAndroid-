import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import styles from '../theme/appTheme'

const Pagina2Screen = () => {

  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text style={{ color: 'black' }}>Pagina 2 Screen</Text>

      <Button
        title='Ir a pagina 3'
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  )
}

export default Pagina2Screen