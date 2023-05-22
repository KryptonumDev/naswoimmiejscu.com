import React, { useEffect, useRef } from "react";
import Lottie from 'lottie-react';
import logoAnimation from './logoAnimation.json';

const BiggerAnimate = () => {
  const locationPath = typeof window !== "undefined" ? window.location.pathname : '';
  const logoRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(document.querySelector('.logoAnimation').getBoundingClientRect().top <= window.innerHeight) {
        console.log('bhek');
        logoRef.current.play();
      }
    })
  }, [locationPath])

  return (
    <Lottie
      className="logoAnimation"
      animationData={logoAnimation}
      loop={false}
      autoplay={false}
      lottieRef={logoRef}
    />
  )
};

export default BiggerAnimate;
