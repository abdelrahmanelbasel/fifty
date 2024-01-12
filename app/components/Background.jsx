"use client";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export const Background = () => {
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [vantaLoaded, setVantaLoaded] = useState(false);
  const [animationClassName, setAnimationClassName] = useState("opacity-0");
  // const [color, setColor] = useState(0xd4004d);
  const [vantaEffect, setVantaEffect] = useState();

  useEffect(() => {
    if (threeLoaded && vantaLoaded) {
      setTimeout(() => {
        const vantaEffect = VANTA.NET({
          el: "#vanta-background",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0,
          color: 0xd400d4,
          points: 15.0,
          maxDistance: 28.0,
          spacing: 18.0,
        });
        setAnimationClassName("opacity-1");
        setVantaEffect(vantaEffect);
      }, 1000);
    }
  }, [threeLoaded, vantaLoaded]);

  return (
    <>
      <div
        onClick={() => {
          const randomColor ="#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
          vantaEffect.setOptions({
            color: randomColor,
          });
        }}
        style={{
          transitionDuration: "5000ms",
        }}
        id="vanta-background"
        className={twMerge(
          "absolute inset-0 h-screen w-screen ease-in-out",
          animationClassName
        )}
      ></div>
      <Script
        async
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        onLoad={() => setThreeLoaded(true)}
      />
      <Script
        async
        src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js"
        onLoad={() => setVantaLoaded(true)}
      />
    </>
  );
};
