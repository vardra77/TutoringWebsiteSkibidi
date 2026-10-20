import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <nav>
          <ul>
            <div className="logo">
              <h2>TUTOR YES</h2>
            </div>
            <li>
              Skibid1
            </li>
            <li>
              Skibid2
            </li>
            <li>
              Skibid3
            </li>
            <li>
              Skibid4
            </li>
          </ul>
        </nav>
        <h2>Classes we offer</h2>
        <hr />
        <ul className="dropdown">
          <li>
            <li>
              Skibid1
            </li>
            <li>
              Skibid2
            </li>
            <li>
              Skibid3
            </li>
            <li>
              Skibid4
            </li>
            <li>
              Skibid1
            </li>
            <li>
              Skibid2
            </li>
            <li>
              Skibid3
            </li>
            <li>
              Skibid4
            </li>
          </li>
        </ul>
        <div className="about-us">
          <h3>About Us</h3>
          <hr/>
          YO CUH I TUTOR
        </div>
      </div>
    </>
  )
}

export default App
