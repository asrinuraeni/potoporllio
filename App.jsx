import { useState } from 'react'
import Intro from './components/intro'
import AboutMe from './components/aboutme'
import Navbar from './components/navbar'
import Services from './components/Services'
import RecentWork from './components/RecentWork'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar/>
    <Intro/>
    <AboutMe/>
    <Services/>
    <RecentWork/>
    </div>
   
  )
}

export default App
