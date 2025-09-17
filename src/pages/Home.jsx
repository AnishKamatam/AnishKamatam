import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  
  const jobTitles = [
    'AI Engineer',
    'Software Developer',
    'Full Stack Developer',
    'Machine Learning Engineer',
    'Data Scientist',
    'Tech Lead'
  ]

  useEffect(() => {
    const currentText = jobTitles[textIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000) // Wait 2 seconds before deleting
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % jobTitles.length)
        }
      }
    }, isDeleting ? 100 : 150) // Faster when typing, slower when deleting

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, jobTitles])

  return (
    <div className="text-container">
      <div className="shooting-stars-background">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`shooting-star star-${i + 1}`}></div>
        ))}
      </div>
      
      <div className="hero-section">
        <h1 className="hero-title">Hey, I'm <span className="name-highlight">Anish</span></h1>
        <h2 className="hero-subtitle">
          {displayText}
          <span className="cursor">|</span>
        </h2>
      </div>
      
      <div className="content-section">
        <div className="intro-text">
          <p>I build end-to-end AI products, from messy concepts to production-ready systems.</p>
          
          <p>Currently focused on building autonomous drones for wildfire detection and spread modeling, and working as an AI Engineer at FundMore AI</p>
          
          <p>In the past few years I have:</p>
          <ul className="experience-list">
            <li>– As an AI Engineer at FundMore AI, designed natural-language to SQL analytics on Vertex AI, enabling secure queries with zero tenant leakage.</li>
            <li>– Founded AGNI X, developing autonomous drones that use edge AI and thermal vision for early wildfire detection.</li>
            <li>– Led hackathon-winning projects like ViewLingo (smart glasses for immersive language learning) and Sentra (AI disaster response system).</li>
          </ul>
        </div>
        
        <div className="contact-text">
          <p>You can talk to me about <strong>AI</strong>, <strong>new ideas</strong>, <strong>life</strong>, or <strong>anything else</strong>.</p>
          <p>Say Hi on <a href="https://x.com/AnishKamatam22" target="_blank" rel="noopener noreferrer" className="link underline">X</a></p>
        </div>
        
        <div className="contact-buttons">
          <Link to="/contact" className="contact-btn primary">Contact</Link>
          <a href="mailto:anishkamatam22@gmail.com" className="contact-btn secondary">
            <svg className="email-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-10 5L2 7"/>
            </svg>
            E-Mail
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
