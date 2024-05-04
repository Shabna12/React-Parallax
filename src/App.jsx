import { useState } from 'react'
import './App.css'
import Top from './Components/Top'
import About from './Components/About'
import Gallery from './Components/Gallery'
import Footer from './Components/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Top/>
        <About/>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Gallery/>
        <br /> <br />
        <Footer/>
      </div>
    </>
  )
}

export default App
