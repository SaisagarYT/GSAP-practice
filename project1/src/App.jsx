import React, { useEffect } from 'react'
import {gsap} from 'gsap';

const App = () => {
  useEffect(() =>{
    const t1 = gsap.timeline();

    t1.to(".box1",{
      x:500,
      rotate:360,
      duration:1.5,
      delay:1
    })

    t1.to(".box2",{
      x:500,
      rotate:360,
      duration:1.5,
    })

    t1.to(".box3",{
      x:500,
      rotate:360,
      duration:2,
      repeat:2,
      yoyo:1
    })
  },[])
  return (
    <div className='container'>
      <div className="box1">

      </div>
      <div className="box2">

      </div>
      <div className="box3">

      </div>
    </div>
  )
}

export default App
