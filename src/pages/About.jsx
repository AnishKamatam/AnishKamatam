import '../App.css'

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-main-title">Anish</h1>
        <p className="about-tagline">FULL-STACK DEV • AI ENGINEER • LLMS • TRAVEL • MUSIC • GOLF</p>
        
        <div className="tech-tags">
          <span className="tech-tag-about">Python</span>
          <span className="tech-tag-about">C++</span>
          <span className="tech-tag-about">TypeScript</span>
          <span className="tech-tag-about">React</span>
          <span className="tech-tag-about">Next.js</span>
          <span className="tech-tag-about">PyTorch</span>
          <span className="tech-tag-about">LLMs</span>
        </div>

        <div className="about-section">
          <h2 className="section-title">Who I Am</h2>
          <p className="section-text">
           I’m a Computer Science & Math student (currently on a year off from Chico State University) who likes building things that actually work outside of a paper or a demo. I’ve been coding since 2018, mostly because I enjoy understanding how systems behave under real constraints (eg. latency, bandwidth, scale, etc.).
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">What I Do</h2>
          <p className="section-text">
          Currently an AI/ML Intern at FoodHealth, working on machine learning systems for nutrition intelligence, and a Research Assistant at UC Berkeley focusing on cloud-augmented autonomy and bandwidth-aware offloading for drones.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">My Journey</h2>
          <p className="section-text">
          AI/ML Intern at FoodHealth, Research Assistant at UC Berkeley, AI Engineer at FundMore AI, Lead ML Engineer at AGNI X, Data Science Extern at Amazon, and Software Engineer Intern at TraceCloud, building AI systems from automated underwriting to autonomous wildfire detection.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Beyond Code</h2>
          <p className="section-text">
            Love golf and football, play chess, and spend my free time building things I think are cool.
          </p>
        </div>

        <div className="about-buttons">
          <button className="about-btn primary">Get in Touch</button>
          <button className="about-btn secondary">
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-10 5L2 7"/>
            </svg>
            E-Mail
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
