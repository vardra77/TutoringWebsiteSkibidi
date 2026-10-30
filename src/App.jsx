import './styles/App.css'

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

function App() {
  return (
    <>
      <nav>
        <ul>
          <header>
            <li class="name">
              <div><i id="name">SASD TUTORING </i>
              </div>
            </li>
          </header>
          <li><a href="#offered">Offered Classes</a></li>
          <li><a href="#account">Account Login</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#top">Top Page</a></li>
        </ul>
      </nav>
      <section id="top">
        <div>
          <video autoplay="autoplay" data-permitted-user="true" data-resource-title="WEBHighSchoolV2.mp4"
            data-resource-uuid="45702b6e-6877-4986-bee6-893375c5bc52" loop="loop" muted="muted" playsinline="playsinline"
            poster="https://resources.finalsite.net/videos/v1659466692/soudertonsdorg/b5spz9pvocrpyakvvjld/WEBHighSchoolV2.jpg"
            class="loaded">
            <source
              src="https://resources.finalsite.net/videos/t_video_h265_720/v1659466692/soudertonsdorg/b5spz9pvocrpyakvvjld/WEBHighSchoolV2.mp4"
              type="video/mp4; codecs=hevc"/>
              <source
                src="https://resources.finalsite.net/videos/t_video_mp4_720/v1659466692/soudertonsdorg/b5spz9pvocrpyakvvjld/WEBHighSchoolV2.mp4"
                type="video/mp4"/>
                <source
                  src="https://resources.finalsite.net/videos/t_video_vp9_720/v1659466692/soudertonsdorg/b5spz9pvocrpyakvvjld/WEBHighSchoolV2.webm"
                  type="video/webm"/>
                  <div class="fsError" data-nosnippet="" role="alert" aria-live="polite">Your web browser does not support the
                    &lt;video&gt; tag.</div>
                </video>
                <footer role="presentation">
                  <div class="fsElementFooterContent">
                    <figure class="fsImage">
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
                <div class="title">
                  <h1 data-tooltip="OFFERED CLASSES"></h1>
                  <hr/>
                    <div class="title-body">
                      <div id="classgrid">
                        <div class="class-card" data-tooltip="MATH">Math <span
                          class="material-symbols-outlined">arrow_drop_down</span>
                          <div class="dropdown">
                            <ul>
                              <li>Algebra I</li>
                              <li>Algebra II</li>
                              <li>Geometry</li>
                              <li>Trigonometry</li>
                              <li>Pre-Calculus</li>
                              <li>Calculus</li>
                            </ul>
                          </div>
                        </div>
                        <div class="class-card" data-tooltip="SCIENCE">Science<span
                          class="material-symbols-outlined">arrow_drop_down</span>
                          <div class="dropdown">
                            <ul>
                              <li>Science 9</li>
                              <li>Physics</li>
                              <li>Biology</li>
                              <li>Chemistry</li>
                              <li>AP Biology</li>
                              <li>AP Chemistry</li>
                              <li>AP Physics - Mechanical</li>
                              <li>AP Physics - Electrical & Magnetism</li>
                            </ul>
                          </div>
                        </div>
                        <div class="class-card" data-tooltip="ENGLISH">English<span
                          class="material-symbols-outlined">arrow_drop_down</span>
                          <div class="dropdown">
                            <ul>
                              <li>Academic/Honors English 9</li>
                              <li>Academic/HonorsEnglish 10</li>
                              <li>Honors English 11/12</li>
                              <li>AP Literature</li>
                              <li>AP Composition</li>
                            </ul>
                          </div>
                        </div>
                        <div class="class-card" data-tooltip="TECHNOLOGY">Technology<span
                          class="material-symbols-outlined">arrow_drop_down</span>
                          <div class="dropdown">
                            <ul>
                              <li>AP Computer Science</li>
                              <li>Computer Programming I</li>
                              <li>Computer Programming II</li>
                              <li>Computer Programming III</li>
                              <li>Game Design</li>
                              <li>Game Programming I</li>
                              <li>Game Programming II</li>
                            </ul>
                          </div>
                        </div>
                        <div class="class-card" data-tooltip="LANGUAGES">Languages<span
                          class="material-symbols-outlined">arrow_drop_down</span>
                          <div class="dropdown">
                            <ul>
                              <li>Mandarin Chinese (I - IV)</li>
                              <li>Spanish (I - IV)</li>
                              <li>French (I - IV)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </section>
            <section id="about">
              <div class="title">
                <h1 data-tooltip="ABOUT US"></h1>
                <hr/>
                  <div class="title-body">
                    <article>
                      <p>IPSUM LOREM DOLOR SIT AMET. IPSUM LOREM DOLOR SIT AMET. IPSUM LOREM DOLOR SIT AMET. IPSUM LOREM DOLOR SIT
                        AMET. IPSUM LOREM DOLOR SIT AMET. IPSUM LOREM DOLOR SIT AMET. IPSUM LOREM DOLOR SIT AMET. IPSUM LOREM
                        DOLOR SIT AMET. IPSUM LOREM DOLOR SIT AMET. IPSUM LOREM DOLOR SIT AMET. IPSUM LOREM DOLOR SIT AMET. IPSUM
                        LOREM DOLOR SIT AMET. IPSUM LOREM DOLOR SIT AMET. IPSUM LOREM DOLOR SIT AMET. IPSUM LOREM DOLOR SIT AMET.
                        IPSUM LOREM DOLOR SIT AMET. IPSUM LOREM DOLOR SIT AMET. IPSUM LOREM DOLOR SIT AMET. IPSUM LOREM DOLOR SIT
                        AMET. IPSUM LOREM DOLOR SIT AMET. </p>
                    </article>
                  </div>
              </div>
          </section>
        </>
        )
}

        export default App
