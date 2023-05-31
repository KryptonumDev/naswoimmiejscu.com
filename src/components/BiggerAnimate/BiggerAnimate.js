import React, { useEffect, useRef } from "react";
import Lottie from 'lottie-react';
import logoAnimation from './logoAnimation.json';

const BiggerAnimate = () => {
  const locationPath = typeof window !== "undefined" ? window.location.pathname : '';
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = document.querySelector('.logoAnimation');
    const handleLottieAnim = () => {
      if (logo.getBoundingClientRect().top <= window.innerHeight) {
        logoRef.current.play();
        window.removeEventListener('scroll', handleLottieAnim);
      }
    };
    handleLottieAnim();
    window.addEventListener('scroll', handleLottieAnim);
    return () => {
      window.removeEventListener('scroll', handleLottieAnim);
    };
  }, [locationPath]);

  const handleAnimationComplete = () => {
    const randomDelay = Math.random() * (10000 - 5000) + 5000;
    setTimeout(() => {
      logoRef.current.goToAndPlay(0);
    }, randomDelay);
  };

  return (
    <Lottie
      className="logoAnimation"
      animationData={logoAnimation}
      lottieRef={logoRef}
      autoplay={false}
      loop={false}
      onComplete={handleAnimationComplete}
    />
  );
};

export default BiggerAnimate;
