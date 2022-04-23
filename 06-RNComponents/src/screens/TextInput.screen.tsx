import React from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { CustomSwitch, HeaderTitle } from '../components/atoms'
import { useForm } from '../hooks/useForm'
import { styles } from '../theme/appTheme'

const TextInputs = () => {
  const { form, onChange, isSuscribe } = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribe: false,
  });

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
            <TextInput
              style={stylesScreen.txtInputStyle}
              placeholder='Ingrese su telefono'
              placeholderTextColor='grey'
              onChangeText={(value) => onChange(value, 'phone')}
              keyboardType='phone-pad'
            />

            <View style={stylesScreen.rowSwitch}>
              <Text style={stylesScreen.txtSwitch}>Suscribirme</Text>
              <CustomSwitch isOn={isSuscribe} onChange={(value) => onChange(value, 'isSuscribe')} />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 2)} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView >
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
  },
  txtSwitch: {
    fontSize: 20,
    color: 'black',
  },
  rowSwitch: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
    paddingHorizontal: 8
  }
});

export default TextInputs;