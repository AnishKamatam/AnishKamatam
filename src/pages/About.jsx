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
            Hello! I'm Anish, a student at Califoria State University, Chico passionate about building intelligent systems that bridge the gap between research and real-world impact. I've been coding since 2018, working across AI, full-stack development, and autonomous systems.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">What I Do</h2>
          <p className="section-text">
           Currently an AI Engineer at FundMore AI, working on automated underwriting for loans and mortages, and Lead ML Engineer at AGNI X, building autonomous drones for wildfire detection and spread modeling.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">My Journey</h2>
          <p className="section-text">
          AI Engineer at FundMore AI, Lead ML Engineer at AGNI X, Data Science Extern at Amazon, and Software Engineer Intern at TraceCloud, building AI systems from automated underwriting to autonomous wildfire detection.
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
