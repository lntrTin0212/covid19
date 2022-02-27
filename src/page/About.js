import React, { useEffect, useState } from 'react'
import alert from '../img/alert2.png'
import vid1 from '../img/trongtin1.mp4'
import vid2 from '../img/trongtin2.mp4'
import vid3 from '../img/trongtin3.mp4'

function About() {
  const [ current, SetCurrent ] = useState(0)
  useEffect(() => {
    const sticker = document.querySelectorAll('.video')
    sticker[0].classList.remove('hidden')
  },[])
  useEffect(() => {
      const sticker = document.querySelectorAll('.video')
      const stickLength = sticker.length - 1
      const  inter = setInterval(() => {
        for (let i = 0; i <= stickLength; i++) {
            sticker[i].classList.add('hidden')
        }
        if (current === stickLength) {
            sticker[current].classList.remove('hidden')
            SetCurrent(0)
        }
        else {
            sticker[current].classList.remove('hidden')
            SetCurrent(prev => prev + 1)
        }
    },1000)

    return () => clearInterval(inter)
  })
    
  return (
    <div className="home-container ">
        <div className="home-content">
            <p className="title-alert">
                <img src={alert} alt="" />
                Covid19-alert
            </p>
            <div className="title-heading">
                <h1>Save yourself <br/> Save the world.</h1>
                <p>Coronavirus disease (COVID-19) is an infectious <br/>
                    disease caused by a new virus.</p>
            </div>
        </div>
        <div className="home-animation">
            <video className="video hidden" width="180px" height="180px" autoPlay loop>
                <source src={vid1}/> 
            </video>
            <video className="video hidden" width="180px" height="180px" autoPlay loop>
                <source src={vid2}/> 
            </video>
            <video className="video hidden" width="180px" height="180px" autoPlay loop>
                <source src={vid3}/> 
            </video>
        </div>
    </div>
  )
}

export default About