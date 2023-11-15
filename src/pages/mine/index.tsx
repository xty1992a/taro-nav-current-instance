import React, {useContext, useEffect, useState} from 'react'
import {observer} from "mobx-react";
import Taro from '@tarojs/taro'
import {Text, View} from '@tarojs/components'

import locationStore from "../../store/location";

interface Props {}

const Index: React.FC<Props> = () => {

  const {location, set} = useContext(locationStore)

  const [flag, setFlag] = useState({})

  useEffect(() => {
    Taro.getLocation({})
      .then(res => {
        set({lat: res.latitude, lng: res.longitude})
        console.log(res)
      })

  }, [])

  useEffect(() => {
    console.log('只要地址变化了，就会需要触发刷新')
    setFlag({})
  }, [location])

  return (
    <View>
      <Text>{JSON.stringify(location)}</Text>
    </View>
  )
}

export default observer(Index)
