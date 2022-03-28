import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { RootStackParams } from '../navigator/StackNavigator';
import styles from '../theme/appTheme'

// interface Props extends StackScreenProps<any,any>{}; NO OPTIMA

//opcional
// interface RouteParams{
//   id: number,
//   nombre: string
// }

//optimo
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{};

const PersonaScreen = ( { route, navigation }: Props) => {
  //NO OPTIMA
  // const params  = route.params;
  // useEffect(() => {
  //   navigation.setOptions({
  //     title: params!.nombre 
  //   })
  // }, [])
  
  //opcional
  //const params = route.params as RouteParams;
  const params = route.params
  const { changeUsername } = useContext(AuthContext)

  useEffect(() => {
    //opcional
    // navigation.setOptions({
    //   title: params!.nombre
    // })

    navigation.setOptions({
      title: params.nombre
    })
  }, [])

  useEffect(() => {
    changeUsername( params.nombre);
  }, [])
  
  
  
  
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {JSON.stringify(params, null, 3)}
      </Text>
    </View>
  )
}

export default PersonaScreen