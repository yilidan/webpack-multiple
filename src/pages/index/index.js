import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {test, sum} from '../../utils.js'
import testImg from '../../image/panda-waving.png'
import testSmall from '../../image/test-small.png'

// const base64Img = require('base64-img')
// const imageToBase64 = require('image-to-base64')
import imageToBase64 from 'image-to-base64/browser'

function Index() {

  useEffect(() => {
    new Promise((resolve, reject) => {
      resolve(1)
      console.log(2)
    }).then(r => {
      console.log(r)
    })

    // var data = base64Img.base64Sync(' http://aidehelper.oss-cn-hangzhou.aliyuncs.com/aide/2021-06-18/ba7e73cfdd8644e4bcf6cd39b321cbe0-icon_yyzg.png?Expires=4777601593&OSSAccessKeyId=LTAIgAYIGiRPPeMn&Signature=%2BYt%2BnRkS4%2BSkSTLXvBVG5VgWyd8%3D')
    // console.log(data)

    // base64Img.base64('http://aidehelper.oss-cn-hangzhou.aliyuncs.com/aide/2021-06-18/ba7e73cfdd8644e4bcf6cd39b321cbe0-icon_yyzg.png?Expires=4777601593&OSSAccessKeyId=LTAIgAYIGiRPPeMn&Signature=%2BYt%2BnRkS4%2BSkSTLXvBVG5VgWyd8%3D', function(err, data) {
    //   console.log(err)
    //   console.log(data)
    // })

    imageToBase64("https://aidehelper.oss-cn-hangzhou.aliyuncs.com/aide/2021-06-18/ba7e73cfdd8644e4bcf6cd39b321cbe0-icon_yyzg.png?Expires=4777601593&OSSAccessKeyId=LTAIgAYIGiRPPeMn&Signature=%2BYt%2BnRkS4%2BSkSTLXvBVG5VgWyd8%3D") // Path to the image
    .then(
      (response) => {
        console.log(response) // "cGF0aC90by9maWxlLmpwZw=="
      }
    )
    .catch(
      (error) => {
        console.log(error) // Logs an error if there was one
      }
    )
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