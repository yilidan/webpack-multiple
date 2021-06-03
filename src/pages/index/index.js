import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import test from '../../utils'

function Index() {

  return (
    <div>
      <div className="test">index</div>
      <div className="test1">index</div>
      <div>{test}</div>
    </div>
  )
}

ReactDOM.render(<Index/>, document.getElementById("app"))

export default Index