import React from 'react'
import {observer} from "mobx-react";
import {View} from '@tarojs/components'

import PageBox from '../../components/page_box'
import {useModules} from '../../components/hooks'
import {PageContext, useProvidePageId} from "../../store/pageContext";

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
    </View>
  )
}

export default observer(Index)
