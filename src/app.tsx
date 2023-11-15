import { Component, PropsWithChildren } from 'react'

import './app.less'


class App extends Component<PropsWithChildren> {
  // this.props.children 就是要渲染的页面
  render () {
    return this.props.children
  }
}

export default App
