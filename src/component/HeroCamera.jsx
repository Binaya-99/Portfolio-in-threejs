import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import gsap from 'gsap';

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    gsap.to(state.camera.position, {
      x: 0,
      y: 0,
      z: 20,
      duration: 0.25,
      ease: "power3.out", // Example easing
    });

    if (!isMobile) {
      gsap.to(groupRef.current.rotation, {
        x: state.pointer.y / 3,
        y: state.pointer.x / 5,
        duration: 0.25,
        ease: "power3.out", // Example easing
      });
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
