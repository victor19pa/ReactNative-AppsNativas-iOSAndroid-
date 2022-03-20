import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import styles from '../theme/appTheme'

const InternalMenu = ( props : DrawerContentComponentProps) => {
  const { navigation } = props
  return (
    <DrawerContentScrollView>
      {/*  Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://gladstoneentertainment.com/wp-content/uploads/2018/05/avatar-placeholder.gif'
          }}
          style={ styles.avatar }
        />
      </View>
      
      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuBoton}
          onPress={ () => navigation.navigate('StackNavigator')}
        >
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.menuBoton}
          onPress={ () => navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
        
      </View>
    </DrawerContentScrollView>
  )
}

export default InternalMenu