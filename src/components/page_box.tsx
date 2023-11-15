import React, {useEffect, useState} from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

interface Props {}

const PageBox: React.FC<Props> = (props) => {
  const [pageId, setPageId] = useState('')
  useEffect(() => {
    const pid = Taro.getCurrentInstance().page?.getPageId?.()
    setPageId(pid!)
  }, [])

  return (
    <View>
      <View className='cell'>
        <Text>pageId</Text>
        <Text>{pageId}</Text>
      </View>
    </View>
  )
}

export default PageBox
