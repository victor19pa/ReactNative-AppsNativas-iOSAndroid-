import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { HeaderTitle } from '../components/atoms'
import { styles } from '../theme/appTheme'

const TextInputs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value
    })
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title={'Text Input'} />

            <TextInput
              style={stylesScreen.txtInputStyle}
              placeholder='Ingrese su nombre'
              placeholderTextColor='grey'
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={(value) => onChange(value, 'name')}

            />
            <TextInput
              style={stylesScreen.txtInputStyle}
              placeholder='Ingrese su correo'
              placeholderTextColor='grey'
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={(value) => onChange(value, 'email')}
              keyboardType='email-address'
            />
            <HeaderTitle title={JSON.stringify(form, null, 2)} />
            <HeaderTitle title={JSON.stringify(form, null, 2)} />
            <TextInput
              style={stylesScreen.txtInputStyle}
              placeholder='Ingrese su telefono'
              placeholderTextColor='grey'
              onChangeText={(value) => onChange(value, 'phone')}
              keyboardType='phone-pad'
            />
            <HeaderTitle title={JSON.stringify(form, null, 2)} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
const stylesScreen = StyleSheet.create({
  txtInputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    marginVertical: 10,
    color: 'rgba(0,0,0,0.6)'
  }
});

export default TextInputs;