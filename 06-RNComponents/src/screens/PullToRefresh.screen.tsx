import React, { useState } from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native'
import { HeaderTitle } from '../components/atoms'
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PullToRefresh = () => {
  const { top } = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState<string>('');

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
      style={{ marginTop: refreshing ? top : 0 }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
          //ios
          style={{ backgroundColor: '#5856D6' }}
          tintColor="white"
          title='Refreshing'
          titleColor='white'
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title={'Pull to refresh'} />
        {
          data && <Text style={{ color: 'black' }}>{data}</Text>
        }

      </View>
    </ScrollView>
  )
}

export default PullToRefresh