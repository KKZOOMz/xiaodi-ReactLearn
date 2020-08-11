import React, { Component } from 'react'
import PropsDemo from './PropsDemo'
import ConditionLoop from './ConditionLoop'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '你好世界',
      count: 0,
      inputVal: ''
    }
  }
  // 与上面写法效果一样
  // state = {
  //   msg: '你好世界'
  // }
  componentDidMount() {
    // this.setState({
    //   count: this.state.count + 1
    // }, () => {
    //   console.log('后面输出的', this.state.count)
    // })
    // console.log(this.state.count)
    // 如果修改的state是依赖上一次更新的state,可以这么写
    // this.setState((prevState, prevProps) => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // })
    // 上面代码的简略写法
    this.setState((prevState, prevProps) => {
      
       return{ count: prevState.count + 1}
      
    }, () => {
      console.log(this.state.count)
    })
  }
  // 绑定input的onChange事件
  inpuutValChange=(e)=> {
    console.log(e.target.value)
    this.setState({
      inputVal: e.target.value
    })
  }
  render() {
    const msg1 = '你好世界1'
    return (
      <div>
        <p>欢饮</p>
        {msg1}
        <h1  >{this.state.msg}</h1>
        <h1>{this.state.count}</h1>
        {/* 组件传递props */}
        <PropsDemo title='小弟标题'></PropsDemo>
        {/* 条件渲染和数据循环渲染 */}
        <ConditionLoop title='条件渲染'></ConditionLoop>
        <input type="text" value={this.state.inputVal} onChange={e=>this.inpuutValChange(e)} ></input>
        {this.state.inputVal}
      </div>
    )
  }
}
