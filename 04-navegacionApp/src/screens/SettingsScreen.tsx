import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles, { colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  const { top } = useSafeAreaInsets();

  const context = useContext(AuthContext);
  const { authState } = context;

  // console.log(authState);

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 20
    }}
    >
      <Text style={{ color: 'blue' }}>Settings Screen</Text>

      <Text style={{ color: 'red' }}> {JSON.stringify(authState, null, 4)}</Text>

      {
        authState.favoriteIcon && (
          <Icon
            name={authState.favoriteIcon}
            size={200}
            color={colores.primary}
          />
        )
      }
    </View>
  )
}

export default SettingsScreen