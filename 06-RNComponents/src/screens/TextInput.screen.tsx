import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { HeaderTitle } from '../components/atoms'
import { styles } from '../theme/appTheme'

const TextInputs = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title={'Text Input'} />

      <TextInput
        style={stylesScreen.txtInputStyle}
      />
    </View>
  )
}
const stylesScreen = StyleSheet.create({
  txtInputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)'
  }
});

export default TextInputs;