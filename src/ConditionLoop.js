import React, { Component } from 'react'

export default class ConditionLoop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTitle: true,
      goods: [
        {title: 'react', value: 3.0} ,
        {title: 'vue', value: 1.0} ,
        {title: 'html', value: 2.0} ,
        {title: 'js', value: 4.0} ,
      ],
      inputValue: ''
    }
    // setTimeout(() => {
    //   this.setState({
    //     showTitle: false
    //   })
    // },3000)
    // 第一种事件绑定
    // this.showTitileFun = this.showTitileFun.bind(this)
  }
  // 第一种写法事件绑定写法
  // showTitileFun() {
  //   this.setState({
  //     showTitle: false
  //   })
  // }
  // 第二种事件绑定写法，利用箭头函数改变this指向
  showTitileFun = () => {
    this.setState({
      showTitle: false
    })
  }
  render() {
    // 条件渲染的第二种写法
    // let result = this.state.showTitle?<h2>{this.props.title}</h2>: null
    // 条件渲染的第三种写法
    let result
    if (this.state.showTitle) {
      result = <h2>{this.props.title}</h2>
    }
    return (
      <div>
        <h1>条件渲染和数据循环渲染展示</h1>
        {/* 事件绑定第一第二中写法 */}
        <button onClick={this.showTitileFun}>不显示title</button>
        {/* 事件绑定第三种写法 */}
        <button onClick={() =>this.showTitileFun()}>不显示title</button>
        {/* 条件渲染的第一种写法 */}
        {/* {this.state.showTitle?<h2>{this.props.title}</h2>: null} */}
        {/* 条件渲染的第二种写法 */}
        {/* {result} */}
        {/* 条件渲染的第三种写法 */}
        {result}
        <ul>
          {
            this.state.goods.map(good => {
              return <li key={good.value }>
                <span  >课程名称：{good.title}</span>————
                <span  >价格：{good.value}</span>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}
