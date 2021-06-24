import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

let totalTime = 3000

function ProgressBar() {
  const [isPlay, setIsPlay] = useState(false)
  const [count, setCount] = useState(0)
  const [type, setType] = useState(0)

  const handlePlay = () => setIsPlay(!isPlay)

  const replay = () => {
    setIsPlay(true)
    setType(type ? 0 : 1)
  }

  const playEnd = () => {
    setCount(count+1)
    replay()
  }

  return (
    <div>
      <button onClick={handlePlay}>{isPlay?'暂停':'播放'}</button>
      <button onClick={replay}>重播</button>
      <span>{`播放次数${count}`}</span>
      <div className="container">
        <div 
          className={`progress ${isPlay ? 'play' : 'pause'}`}
          style={{
            animationDuration: `${totalTime}ms`,
            animationName: `${type ? 'replay' : 'play'}`
          }}
          onAnimationEnd={playEnd}>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<ProgressBar />, document.getElementById('app'))

export default ProgressBar
