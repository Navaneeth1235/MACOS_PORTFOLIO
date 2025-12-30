import React from 'react'
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import {Welcome, Navbar, Dock, WindowControls} from "#components"
import { Terminal, Safari, Resume, Finder, Text, Image } from '#windows';

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
    </main>
  )
};

export default App
