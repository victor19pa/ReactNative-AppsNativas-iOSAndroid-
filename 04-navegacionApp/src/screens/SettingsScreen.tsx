import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {
  const {top} = useSafeAreaInsets();

  const context = useContext(AuthContext);
  const { authState } = context;

  // console.log(authState);
  
  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 20 
      }}
    >
      <Text style={{color: 'blue'}}>Settings Screen</Text>

      <Text> { JSON.stringify(authState, null , 4 ) }</Text>
    </View>
  )
}

export default SettingsScreen