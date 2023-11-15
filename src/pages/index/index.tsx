import React from 'react'
import {observer} from "mobx-react";
import {View} from '@tarojs/components'

import PageBox from '../../components/page_box'
import {useModules} from '../../components/hooks'

interface Props {
}

const Index: React.FC<Props> = () => {
  const modules = useModules()

  return (
    <View>
      {
        modules.map(n => (<PageBox key={n} />))
      }
    </View>
  )
}

export default observer(Index)
