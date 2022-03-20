import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../theme/appTheme';

const SettingsScreen = () => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 20 
      }}
    >
      <Text style={{color: 'blue'}}>Settings Screen</Text>
    </View>
  )
}

export default SettingsScreen