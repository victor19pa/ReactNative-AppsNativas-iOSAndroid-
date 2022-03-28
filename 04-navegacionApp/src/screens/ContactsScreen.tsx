import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import styles from '../theme/appTheme'

const ContactsScreen = () => {

  const { signIn, authState ,logout } = useContext(AuthContext)
  const { isLoggedIn } = authState;

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        Contacts Screen
      </Text>
      {!isLoggedIn ? (
        <Button
          title='Sign in'
          onPress={signIn}
        />
      ) : (
        <Button
          title='Log Out'
          onPress={logout}
        />
      )}
    </View>
  )
}

export default ContactsScreen