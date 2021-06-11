import React from 'react'
import ReactDOM from 'react-dom'
import {test, sum} from '../../utils'
import './index.less'

function Other() {

  return (
    <div>
      <div className="blue">123</div>
      <div>{test}</div>
    </div>
  )
}

ReactDOM.render(<Other/>, document.getElementById("app"))

export default Other
