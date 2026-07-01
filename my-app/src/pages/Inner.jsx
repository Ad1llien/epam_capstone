

import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import Education from '../components/Timeline'
import Box from '../components/Box'
import Panel from '../components/Panel'
import NavBar from '../components/Navigation'
import Experience from '../components/Expertise'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Info from '../components/Info'
import Feedbacks from '../components/Feedback'

export default function Inner(){

    return(
        <div className='wrapper flex h-screen flex-row overflow-hidden'>
      <div className='flex h-screen flex-col flex-shrink-0'>
        <Panel/>
      </div>
      <div className='flex flex-col flex-1 overflow-y-auto '>

        <div id='about'><Box/></div>

        <div id='education'><Education/></div>

        <div  id='experience'><Experience/></div>


        <div  id='skills'><Skills/></div>

        <div id='portfolio'><Portfolio /></div>

        <div id='contacts'><Info/></div>

        <div  id='feedbacks'><Feedbacks/></div>
      </div>
    </div>
    )
}