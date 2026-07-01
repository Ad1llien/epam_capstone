import Resume from './pages/Inner';
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}   />
      <Route path='/resume' element={<Resume/>}   />
    </Routes>
    
  )
}

export default App
