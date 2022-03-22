import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import styles, { colores } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';


const InternalMenu = (props: DrawerContentComponentProps) => {
  const { navigation } = props
  return (
    <DrawerContentScrollView>
      {/*  Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Icon name='person-circle-outline' size={150} color={colores.primary} style={styles.avatar} />
        {/* <Image
          source={{
            uri: 'https://gladstoneentertainment.com/wp-content/uploads/2018/05/avatar-placeholder.gif'
          }}
          style={styles.avatar}
        /> */}
      </View>

      {/* Opciones de menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('Tabs')}
        >
          <View style={styles.menuLateral}>
            <Icon name='battery-charging-sharp' size={23} color={colores.primary} style={styles.iconMenuLateral} />
            <Text style={styles.menuTexto}>Tabs</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <View style={styles.menuLateral}>
            <Icon name='arrow-forward-sharp' size={23} color={colores.primary} style={styles.iconMenuLateral} />
            <Text style={styles.menuTexto}>Ajustes</Text>
          </View>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  )
}

export default InternalMenu