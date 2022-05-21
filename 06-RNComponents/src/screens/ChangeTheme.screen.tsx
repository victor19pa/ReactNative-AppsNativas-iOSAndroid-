import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { HeaderTitle } from '../components/atoms'
import { ThemeContext } from '../context/themeContext/ThemeContext'
import { styles } from '../theme/appTheme'

const ChangeTheme = () => {
  const { setDarkTheme, setLightTheme } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Change Theme' />

      <TouchableOpacity
        style={{
          backgroundColor: '#5856D6',
          justifyContent: 'center',
          width: 150,
          height: 50,
          borderRadius: 20,
          // alignItems: 'center'
        }}
        activeOpacity={0.8}
        onPress={setDarkTheme}
      >
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: 22
        }}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChangeTheme