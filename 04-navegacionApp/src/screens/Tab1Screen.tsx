import React from 'react'
import { View, Text } from 'react-native'
import { useEffect } from 'react';
import styles from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab1Screen = () => {
  

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>  
      {/* <Text>
        <Icon name='airplane-outline' size={30} color='#900'/>
      </Text> */}
        <Icon name="game-controller-outline" size={30} color="#900" />
    </View>
  )
}

export default Tab1Screen