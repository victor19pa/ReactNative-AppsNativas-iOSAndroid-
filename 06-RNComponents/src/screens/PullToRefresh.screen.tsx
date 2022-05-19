import React, { useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { HeaderTitle } from '../components/atoms'
import { styles } from '../theme/appTheme';

const PullToRefresh = () => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log("terminamos");
      setRefreshing(false)
    }, 1500);
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title={'Pull to refresh'} />
      </View>
    </ScrollView>
  )
}

export default PullToRefresh