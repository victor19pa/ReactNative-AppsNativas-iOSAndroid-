import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };

const Pagina1Screen = ({ navigation }: Props) => {

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