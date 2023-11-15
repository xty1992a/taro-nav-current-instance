import React from 'react'
import {observer} from "mobx-react";
import {Button, View} from '@tarojs/components'

import PageBox from '../../components/page_box'
import {useModules} from '../../components/hooks'
import {PageContext, useProvidePageId} from '../../store/pageContext'
import Taro from "@tarojs/taro";

interface Props {
}

const Index: React.FC<Props> = () => {
  const modules = useModules()

  return (
    <View>
      <PageContext.Provider value={useProvidePageId()} >
        {
          modules.map(n => (<PageBox key={n} />))
        }
      </PageContext.Provider>

      <Button
        onClick={() => Taro.navigateTo({
          url: `/pages/detail/index?id=1`
        })}
      >详情</Button>
    </View>
  )
}

export default observer(Index)
