import React from 'react'
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import {Welcome, Navbar, Dock, WindowControls} from "#components"
import { Terminal, Safari, Resume, Finder } from '#windows';

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
    </main>
  )
};

export default App
