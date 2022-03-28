import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer';
// import { StackScreenProps } from '@react-navigation/stack';
import styles, { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> { };

const Pagina1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
        >
          <Icon name='menu-outline' size={35} color={colores.primary} style={styles.globalMargin} />
        </TouchableOpacity>
      )
    })
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title='Ir a Pagina 2'
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text style={styles.title}>Navegar con argumentos</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={[styles.btnGrande, { backgroundColor: '#5856D6' }]}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Icon name='person-add-outline' size={35} color='white' />
          <Text style={styles.btnGrandeTxt}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnGrande, { backgroundColor: '#ff9427' }]}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Icon name='rose-outline' size={35} color='white' />
          <Text style={styles.btnGrandeTxt}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Pagina1Screen