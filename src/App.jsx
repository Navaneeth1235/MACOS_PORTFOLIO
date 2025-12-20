import React from 'react'
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import {Welcome, Navbar, Dock, WindowControls} from "#components"
import { Terminal } from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome/>
      <Dock/>
      <Terminal/>
      <WindowControls/>
    </main>
  )
}

export default App
