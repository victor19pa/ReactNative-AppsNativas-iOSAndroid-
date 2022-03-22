import React from 'react'
import { View, Text } from 'react-native'
import { useEffect } from 'react';
import styles, { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab1Screen = () => {


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Icon name="game-controller-outline" size={50} color={colores.primary} />
      <Icon name="airplane-outline" size={80} color={colores.primary} />
      <Icon name="bonfire-outline" size={50} color={colores.primary} />
      <Icon name="calculator-outline" size={80} color={colores.primary} />
      <Icon name="chatbubble-ellipses-outline" size={50} color={colores.primary} />
      <Icon name="images-outline" size={80} color={colores.primary} />
      <Icon name="leaf-outline" size={50} color={colores.primary} />

    </View>
  )
}

export default Tab1Screen