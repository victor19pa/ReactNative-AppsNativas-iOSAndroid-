import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer';
// import { StackScreenProps } from '@react-navigation/stack';
import styles from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> { };

const Pagina1Screen = ({ navigation }: Props) => {

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Button 
  //         title='Menu'
  //         onPress={ () => navigation.toggleDrawer()}
  //       />
  //     )
  //   })
  // }, [])
  

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
          style={[styles.btnGrande, {backgroundColor: '#5856D6'}]}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Text style={styles.btnGrandeTxt}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnGrande, {backgroundColor: '#ff9427'}]}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Text style={styles.btnGrandeTxt}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Pagina1Screen