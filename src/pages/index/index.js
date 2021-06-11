import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {test, sum} from '../../utils'
import testImg from '../../image/panda-waving.png'
import testSmall from '../../image/test-small.png'

function Index() {

  useEffect(() => {
    new Promise((resolve, reject) => {
      resolve(1)
      console.log(2)
    }).then(r => {
      console.log(r)
    })
  }, [])

  return (
    <div>
      <div className="test">index</div>
      <div className="test1">index</div>
      <div>{test}</div>
      {/* <img src={testImg} alt=""/> */}
      {/* <img src={testSmall} alt=""/> */}
      <a href="other.html">跳转other</a>
      <div>{sum()}</div>
    </div>
  )
}

ReactDOM.render(<Index/>, document.getElementById("app"))

export default Index