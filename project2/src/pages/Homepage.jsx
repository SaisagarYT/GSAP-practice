import React from 'react'
import { useEffect } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Homepage = () => {
    useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".box").forEach((box) => {
    gsap.fromTo(
      box,
      { opacity: 0, scale: 1 },
      {
        opacity: 1,
        scale: 1.2,
        translateX: 20,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            scroller:"body",
            trigger: box,
            markers:true,
            scrub:2,
        }
      }
    );
  });
}, []);

  return (
    <div className='homepage'>
        <div className="box">

        </div>
        <div className="box">

        </div>
        <div className="box">

        </div>
        <div className="box">

        </div>
        <div className="box">

        </div>
        <div className="box">

        </div>
        <div className="box">

        </div>
        <div className="box">

        </div>
        <div className="box">

        </div>
        <div className="box">

        </div>
        <div className="box">

        </div>
        <div className="box">

        </div>
    </div>
  )
}

export default Homepage
