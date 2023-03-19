import React from 'react'
import Particles from 'react-tsparticles'
export default function ParticlesYo() {
  let options = {
    background : {
      color : '#fff'
    },
    fpsLimit : 60,
    interactivity :{
      detectsOn : "canvas",
      events : {
        resize : true
      }
    },
    particles : {
      color :{
        value :'red'
      },
      number : {
        density :{
          enable : true,
          area : 1080
        },
        limit : 0,
        value : 400
      }
    },
    opacity :{
      animation:{
        enable : true,
        minimumValue : 0.05,
        speed : 2,
        sync : false 
      }
    },

  }
  return (
    <div>
       <Particles  options={options}/>
    </div>
  )
}
