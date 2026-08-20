import { Route, BrowserRouter, Routes } from 'react-router-dom'
import React, { useEffect } from 'react'
import Home from './Components/Home'
import Lenis from 'lenis'
const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 0.7,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
