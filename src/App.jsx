import React from 'react'
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import {Welcome, Navbar, Dock, WindowControls, Home} from "#components"
import { Terminal, Safari, Resume, Finder, Text, Image, Contact } from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
      <Home/>
    </main>
  )
};

export default App
