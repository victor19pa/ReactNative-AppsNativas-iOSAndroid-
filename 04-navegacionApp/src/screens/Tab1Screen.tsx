import React from 'react'
import { View, Text } from 'react-native'
import { useEffect } from 'react';
import styles from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab1Screen = () => {


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Icon name="game-controller-outline" size={50} color="#900" />
      <Icon name="airplane-outline" size={80} color="#900" />
      <Icon name="bonfire-outline" size={50} color="#900" />
      <Icon name="calculator-outline" size={80} color="#900" />
      <Icon name="chatbubble-ellipses-outline" size={50} color="#900" />
      <Icon name="images-outline" size={80} color="#900" />
      <Icon name="leaf-outline" size={50} color="#900" />

    </View>
  )
}

export default Tab1Screen