import React, { useContext, useState } from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native'
import { HeaderTitle } from '../components/atoms'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PullToRefresh = () => {
  // const { top } = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState<string>('');
  const { theme: { colors, dark }, } = useContext(ThemeContext)


  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log("terminamos");
      setRefreshing(false);
      setData('Hola Mundo')
    }, 3000);
  }
  return (
    <ScrollView
      style={{ marginTop: refreshing ? 20 : 0 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={colors.primary}
          colors={[colors.text]}
          //ios
          style={{ backgroundColor: colors.primary }}
          tintColor={dark ? 'white' : 'black'}
          title='Refreshing'
          titleColor='white'
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title={'Pull to refresh'} />
        {
          data ? <Text style={{ color: colors.primary }}>{data}</Text> : null
        }

      </View>
    </ScrollView>
  )
}

export default PullToRefresh