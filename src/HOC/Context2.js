import React, { Component } from 'react'
// 演示使用上下文
let store = {
  name: '小弟',
  from: '小弟弟',
}
// 创建上下文
const XdContext = React.createContext()
// const { Provider, Consumer } = XdContext

class Info extends Component {
  render() {
    return (
      <XdContext.Consumer>
        {(store) => {
          return (
            <div>
              <p>姓名：{store.name}</p>
              <p>来自哪里：{store.from}</p>
            </div>
          )
        }}
      </XdContext.Consumer>
    )
  }
}

function ToolBar() {
  return <Info></Info>
}
export default class Context2 extends Component {
  render() {
    return (
      <div>
        <XdContext.Provider value={store}>
          <ToolBar></ToolBar>
        </XdContext.Provider>
      </div>
    )
  }
}
