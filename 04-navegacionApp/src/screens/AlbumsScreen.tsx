import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import styles from '../theme/appTheme';

const AlbumsScreen = () => {
  const { authState, logout, signIn } = useContext(AuthContext);
  const { isLoggedIn } = authState

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        Album Screen
      </Text>
      {isLoggedIn ? (
        <Button
          title='Log Out'
          onPress={logout}
        />
      ) : (
        <Button
          title='Sign in'
          onPress={signIn}
        />
      )
      }
    </View>
  )
}

export default AlbumsScreen