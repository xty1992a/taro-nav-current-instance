import {createContext, useContext, useEffect, useState} from 'react';
import Taro, {useDidShow} from '@tarojs/taro'

export const PageContext = createContext('');

export function useProvidePageId() {
  const [pid, setpid] = useState('')
  useDidShow(() => {
    const _pid = Taro.getCurrentInstance().page?.getPageId?.()
    setpid(_pid!)
  })

  return pid
}

export function usePageId() {
  return useContext(PageContext)
}
