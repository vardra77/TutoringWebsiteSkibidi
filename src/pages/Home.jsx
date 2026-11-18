import '../styles/App.css'
import { Link } from 'react-router-dom'
import brightnessIcon from '../assets/brightness.svg'
import moonIcon from '../assets/moon.svg'

const classes = [
  {
    name: 'Math',
    subjects: [
      'Algebra I',
      'Algebra II',
      'Geometry',
      'Trigonometry',
      'Pre-Calculus',
      'Calculus',
    ],
  },
  {
    name: 'Science',
    subjects: [
      'Science 9',
      'Physics',
      'Biology',
      'Chemistry',
      'AP Biology',
      'AP Chemistry',
      'AP Physics — Mechanics',
      'AP Physics — Electricity & Magnetism',
    ],
  },
  {
    name: 'English',
    subjects: [
      'Academic / Honors English 9',
      'Academic / Honors English 10',
      'Honors English 11 / 12',
      'AP Literature',
      'AP Composition',
    ],
  },
  {
    name: 'Technology',
    subjects: [
      'AP Computer Science',
      'Computer Programming I',
      'Computer Programming II',
      'Computer Programming III',
      'Game Design',
      'Game Programming I',
      'Game Programming II',
    ],
  },
  {
    name: 'Languages',
    subjects: [
      'Mandarin Chinese (I–IV)',
      'Spanish (I–IV)',
      'French (I–IV)',
    ],
  },
]

function Home({ isDark, onToggleTheme }) {
  return (
    <>
  <nav>
    <ul>
        <li className="name">
          <div><i id="name">SASD TUTORING </i>
          </div>
        </li>
      <li><a href="#offered">Offered Classes</a></li>
      <li><Link to="/login">Account Login</Link></li>
      <li><a href="#about">About Us</a></li>
      <li><a href="#top">Front Page</a></li>
      <li><a href="#bottom">Resources</a></li>
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
    <section id="top">
      <div>
        <video autoPlay data-permitted-user="true" data-resource-title="WEBHighSchoolV2.mp4"
          data-resource-uuid="45702b6e-6877-4986-bee6-893375c5bc52" loop muted playsInline
          poster="https://resources.finalsite.net/videos/v1659466692/soudertonsdorg/b5spz9pvocrpyakvvjld/WEBHighSchoolV2.jpg"
          className="loaded">
          <source
            src="https://resources.finalsite.net/videos/t_video_h265_720/v1659466692/soudertonsdorg/b5spz9pvocrpyakvvjld/WEBHighSchoolV2.mp4"
            type="video/mp4; codecs=hevc"/>
          <source
            src="https://resources.finalsite.net/videos/t_video_mp4_720/v1659466692/soudertonsdorg/b5spz9pvocrpyakvvjld/WEBHighSchoolV2.mp4"
            type="video/mp4"/>
          <source
            src="https://resources.finalsite.net/videos/t_video_vp9_720/v1659466692/soudertonsdorg/b5spz9pvocrpyakvvjld/WEBHighSchoolV2.webm"
            type="video/webm"/>
          <div className="fsError" data-nosnippet="" role="alert" aria-live="polite">Your web browser does not support the
            &lt;video&gt; tag.</div>
        </video>
        <footer role="presentation">
          <div className="fsElementFooterContent">
            <figure className="fsImage">
              <picture><img alt="background"
                  data-image-sizes="[{%22url%22:%22https://resources.finalsite.net/images/v1651999326/soudertonsdorg/mjvas6axd7pmzmwuhro8/hero-background.svg%22,%22width%22:1440}]"
                  data-resource-description="" data-resource-filename="hero-background.svg"
                  data-resource-uuid="e73c2b22-52e9-47dd-a42a-fb9b1f144add" id=""
                  src="https://resources.finalsite.net/images/v1651999326/soudertonsdorg/mjvas6axd7pmzmwuhro8/hero-background.svg"
                  loading="lazy" aria-hidden="true"/></picture>
            </figure>
          </div>
        </footer>
      </div>
    </section>
    <section id="offered">
      <div>
        <div className="title">
          <div className="title-heading">
            <h1 data-tooltip="OFFERED CLASSES"></h1>
            <hr/>
          </div>
          <div className="title-body">
            <div id="classgrid">
              {classes.map(({ name, subjects }) => (
                <article className="class-card" key={name}>
                  {name}
                  <div className="dropdown">
                    <ul>
                      {subjects.map((subject) => <li key={subject}>{subject}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section><br/>
    <div className="about-contact">
      <section id="about">
        <div className="title">
          <div className="title-heading">
            <h1 data-tooltip="ABOUT US"></h1>
            <hr/>
          </div>
          <div className="title-body">
            <article>
              <p>BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH
                BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH
                BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH
                BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH
                BLAH BLAH BLAH BLAH </p>
            </article>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="title">
          <div className="title-heading">
            <h1 data-tooltip="CONTACT"></h1>
            <hr/>
          </div>
          <div className="title-body">
            <article>
              <ul>
                <li>BLAH BLAH BLAH</li>
                <li>BLAH BLAH BLAH</li>
                <li>BLAH BLAH BLAH</li>
                <li>BLAH BLAH BLAH</li>
                <li>BLAH BLAH BLAH</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </div>
  </main>
  <section>
    <div id="bottom">
      <h3>Resources</h3>
      <ul>
        <li><a href="https://www.soudertonsd.org/" target="_blank" rel="noreferrer">Souderton School District Website</a></li>
        <li><a href="https://github.com/vardra77/TutoringWebsiteSkibidi" target="_blank" rel="noreferrer">Website's Github</a></li>
      </ul>
    </div>
  </section>
        </>
        )
}

export default Home
