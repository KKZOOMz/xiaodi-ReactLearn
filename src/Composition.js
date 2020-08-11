
import React from 'react'

function Dialog(props) {
  return (
    <div style={{border: `5px solid ${props.color || 'green'}`}}>
      {/* 相当于Vue的匿名插槽 */}
      {props.children}
      {/* 相当于vue框架里的具名插槽 */}
      {props.btn}
    </div>
  )
}

export default function Composition() {
  const confinBtn = (
    <button onClick={() => alert('react好不好玩')}>确认</button>
  )
  return (
    <div>
      <h1>组件符合的写法</h1>
        <Dialog color="pink" btn={confinBtn}>
          <h2>欢饮小弟</h2>
          <p>小弟学习React</p>
          {/* {confinBtn} */}
        </Dialog>
    </div>
  )
}

