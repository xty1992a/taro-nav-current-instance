import React from 'react'
import {observer} from "mobx-react";
import {Button, View} from '@tarojs/components'
import Taro, {useRouter} from '@tarojs/taro'

import PageBox from '../../components/page_box'
import {useModules} from '../../components/hooks'
import {PageContext, useProvidePageId} from "../../store/pageContext";

interface Props {
}

const Index: React.FC<Props> = () => {
  const {id='0'} = useRouter().params
  const modules = useModules()

  return (
    <View>
      <View>detail {id}</View>
      <PageContext.Provider value={useProvidePageId()} >
        {
          modules.map(n => (<PageBox key={n} />))
        }
      </PageContext.Provider>

      <Button
        onClick={() => Taro.navigateTo({
        url: `/pages/detail/index?id=${Number(id)+1}`
      })}
      >下一个详情</Button>
    </View>
  )
}

export default observer(Index)
