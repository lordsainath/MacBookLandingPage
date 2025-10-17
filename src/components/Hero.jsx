import React, { useEffect, useRef } from "react";

const Hero = () => {
    const videoREf = useRef();

    useEffect(()=>{
    //    if(videoREf.current) videoREf.current.playbackRate = 1;
    },[])

  return (
    <>
      <section id="hero">
        <div>
          <h1>MacBook Pro</h1>
          <img src="./title.png" alt="" />
        </div>

        <video ref={videoREf } src="./videos/hero.mp4" autoPlay muted loop></video>
        <button>Buy</button>
        <p>From $1599 or $133.25/mo. for 12 mo</p>
      </section>
    </>
  );
};

export default Hero;
