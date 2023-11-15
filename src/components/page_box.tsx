import React, {useContext, useEffect, useState} from 'react'
import Taro from '@tarojs/taro'
import {View, Text, Button} from '@tarojs/components'
import locationStore from "../store/location";

interface Props {}

const PageBox: React.FC<Props> = () => {
  const [pageId, setPageId] = useState('')
  const {set} = useContext(locationStore)

  useEffect(() => {
    const pid = Taro.getCurrentInstance().page?.getPageId?.()
    setPageId(pid!)
  }, [])


  const locate = () => {
    Taro.getLocation({})
      .then(res => {
        set({lat: res.latitude, lng: res.longitude})
        console.log(res)
      })
  }

  return (
    <View>
      <Button onClick={locate}>获取地理位置</Button>
      <View className='cell'>
        <Text>pageId</Text>
        <Text>{pageId}</Text>
      </View>
    </View>
  )
}

export default PageBox
