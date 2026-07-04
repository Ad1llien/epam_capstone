

import { useState, useEffect  } from 'react'
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
import axios from 'axios'
import { PRIMARY_COLOR, API_URL } from '../utils/constant'

const API = API_URL

export default function Inner(){
  const [user, setUser] = useState(null)
  const Wrapper = ({id, children}) => {
    return(
      <div id={id}>
        {children}
      </div>
    )
  }

  useEffect(() => {
    axios.get(`${API}/auth/me`, {withCredentials:true})
.then((res) => setUser(res.data))
.catch(() => setUser(null))
  }, [])




    return(
      <div className='wrapper flex h-screen flex-row overflow-hidden'>
      <header className='flex h-screen flex-col flex-shrink-0'>
        <Panel/>
      </header>
      <div className='flex flex-col flex-1 overflow-y-auto '>
        <Wrapper id='about'>
          <Box/>
        </Wrapper>
        

        <div id='education'><Education/></div>

        <div  id='experience'><Experience/></div>


        <div  id='skills'><Skills user={user}/></div>

        <div id='portfolio'><Portfolio /></div>

        <div id='contacts'><Info/></div>

        <div  id='feedbacks'><Feedbacks/></div>
      </div>
    </div>
    )
}