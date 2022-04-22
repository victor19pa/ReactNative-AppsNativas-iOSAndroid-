import React from 'react'
import { Alert, Button, View } from 'react-native'
import prompt from 'react-native-prompt-android'
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

  const showPrompt = () => {
    // solo ios
    // Alert.prompt(
    //   'Esta seguro?',
    //   'Esta accion no se puede revertir',
    //   (valor: string) => console.log('info ', valor),
    //   'plain-text',
    //   'Hola mundo'
    // )
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder'
      }
    );
  }

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alerts' />

      <Button
        title='Mostrar Alerta'
        onPress={showAlert}
      />

      <View style={{ height: 10 }} />

      <Button
        title='Mostrar Alerta (solo iOS)'
        onPress={showPrompt}
      />
    </View>
  )
}

export default AlertScreen;