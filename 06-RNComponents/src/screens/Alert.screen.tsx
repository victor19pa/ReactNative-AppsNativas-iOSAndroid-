import React from 'react'
import { Alert, Button, View } from 'react-native'
import { HeaderTitle } from '../components/atoms'
import { styles } from '../theme/appTheme'

const AlertScreen = () => {

  const showAlert = () => {
    Alert.alert(
      'Titulo',
      'Mensaje de Alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive'
        },
        {
          text: 'Ok',
          onPress: () => console.log('Ok Pressed')
        }
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('on dismiss')
      }
    )
  }

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alerts' />

      <Button
        title='Mostrar Alerta'
        onPress={showAlert}
      />
    </View>
  )
}

export default AlertScreen;