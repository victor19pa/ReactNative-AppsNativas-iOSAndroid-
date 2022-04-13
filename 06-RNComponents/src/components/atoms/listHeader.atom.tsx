import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../../theme/appTheme'

interface Props {
  title: string;
}

const { top } = useSafeAreaInsets();

const listHeader = ({ title }: Props) => {
  return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default listHeader