import { useState } from 'react'
import { Link } from 'react-router-dom'
import brightnessIcon from '../assets/brightness.svg'
import moonIcon from '../assets/moon.svg'
import '../styles/App.css'

export default function Onboarding({ mode = 'login', isDark, onToggleTheme }) {
  const [isSigningUp, setIsSigningUp] = useState(mode === 'signup')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Account sign-in is not connected yet.')
  }

  function changeMode(signingUp) {
    setIsSigningUp(signingUp)
    setMessage('')
  }

  return (
    <>
      <div className="bg" />
      <div className="bg bg2" />
      <div className="bg bg3" />
      <nav id="top">
        <ul>
          <li className="name">
            <div><i id="name">SASD TUTORING</i></div>
          </li>
          <li><Link to="/#offered">Offered Classes</Link></li>
          <li><a href="#account">Account Login</a></li>
          <li><Link to="/#about">About Us</Link></li>
          <li><Link to="/">Front Page</Link></li>
          <li><Link to="/#bottom">Resources</Link></li>
          <li className="theme-control">
            <button
              type="button"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={isDark}
              onClick={onToggleTheme}
            >
              <img src={isDark ? brightnessIcon : moonIcon} alt="" />
            </button>
          </li>
        </ul>
      </nav>
      <main>
        <section id="account">
          <div className="title">
            <h1 data-tooltip={isSigningUp ? 'SIGN UP' : 'LOG IN'} />
            <hr />
          </div>
          <div id="form">
            <div>
              <button type="button" onClick={() => changeMode(false)}>
                <strong>Login</strong>
              </button>
              <button type="button" onClick={() => changeMode(true)}>
                <strong>Sign Up</strong>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor={isSigningUp ? 'new-email' : 'email'}>Email:</label>
              <input
                type="email"
                id={isSigningUp ? 'new-email' : 'email'}
                name="email"
                autoComplete="email"
                required
              />
              <br /><br />
              <label htmlFor={isSigningUp ? 'new-password' : 'password'}>Password:</label>
              <input
                type="password"
                id={isSigningUp ? 'new-password' : 'password'}
                name="password"
                autoComplete={isSigningUp ? 'new-password' : 'current-password'}
                required
              />
              <br /><br />
              <button type="submit">{isSigningUp ? 'Sign Up' : 'Login'}</button>
              {message && <p role="status">{message}</p>}
            </form>
          </div>
          <p><Link to="/">Back to front page</Link></p>
        </section>
      </main>
      <footer>
        <div id="bottom">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="https://www.soudertonsd.org/" target="_blank" rel="noreferrer">
                Souderton School District Website
              </a>
            </li>
            <li>
              <a
                href="https://github.com/vardra77/TutoringWebsiteSkibidi"
                target="_blank"
                rel="noreferrer"
              >
                Website's Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
