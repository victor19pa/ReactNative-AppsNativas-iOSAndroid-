import React, { useContext } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/atoms'
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const CustomModal = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { theme: { colors, dividerColor } } = useContext(ThemeContext)

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Modal Screen' />

      <Button
        title='Modal'
        onPress={() => setIsVisible(true)}
      />

      <Modal
        animationType='fade'
        visible={isVisible}
        transparent
      >
        <View style={{
          flex: 1,
          backgroundColor: dividerColor,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: colors.background,
            height: 200,
            width: 200,
            justifyContent: 'center',
            alignItems: 'center',
            shadowOffset: {
              width: 0,
              height: 10
            },
            shadowOpacity: 0.25,
            elevation: 10,
            borderRadius: 10,
          }}>
            <Text style={{ color: colors.text, fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
            <Text style={{ color: colors.text, fontSize: 16, fontWeight: '300', marginBottom: 20 }}>Cuerpo del modal</Text>
            <Button
              title='Salir'
              onPress={() => setIsVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default CustomModal