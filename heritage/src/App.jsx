import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import heritageLogo from './assets/heritageLogo.avif'
import './App.css'
import Home from './Componets/Home'
import About from './Componets/About'
import Services from './Componets/Services'
import Portfolio from './Componets/Portfolio'
import Contact from './Componets/Contact'
import Nav from './Componets/Nav'
import Hero from './Componets/Hero'


function App() {

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
      <main>
        <Hero />
      </main>
      <footer>
        <p>This website is a copy of <a href="heritagelandscapestx.com">heritage landscapes</a> website for practice for R.Patino</p>
      </footer>
    </>
  )
}

export default App
