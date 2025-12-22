import React from 'react'
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import {Welcome, Navbar, Dock, WindowControls} from "#components"
import { Terminal, Safari, Resume } from '#windows';

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
    </main>
  )
}

export default App
