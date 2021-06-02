import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Index() {

  return (
    <div>
      <div className="test">index</div>
    </div>
  )
}

ReactDOM.render(<Index/>, document.getElementById("app"))

export default Index