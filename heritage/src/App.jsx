import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import heritageLogo from './assets/heritageLogo.avif'
import './App.css'
import FirstComponet from './Componets/FirstComponet'
import Nav from './Componets/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <a href="https://heritagelandscapestx.com">
          <img src={heritageLogo}  alt="Heritage logo" />
        </a>
        <nav>
          <Nav />
        </nav>
      </header>
        <FirstComponet />
    </>
  )
}

export default App
