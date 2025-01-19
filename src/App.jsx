import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Third from './components/Third'
import America from './components/America'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
      <Third />
      <America />
      <Footer />
      {/* <p className="bg-red-500 text-xl p-8">hello</p> */}
    </>
  )
}

export default App
