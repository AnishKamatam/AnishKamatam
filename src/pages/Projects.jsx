import '../App.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "ViewLingo",
      description: "An immersive language learning platform built for smart glasses, enabling real-time translation and contextual learning. Designed for seamless communication, ViewLingo combines visual AI with speech recognition to make language acquisition natural and interactive.",
      buttons: [
        { text: "Visit", type: "primary", link: "https://www.linkedin.com/posts/anishkamatam_%F0%9D%9F%B0%F0%9D%9F%B4-%F0%9D%97%B5%F0%9D%97%BC%F0%9D%98%82%F0%9D%97%BF%F0%9D%98%80-%F0%9D%97%A2%F0%9D%97%BB%F0%9D%97%B2-%F0%9D%97%BD%F0%9D%97%AE%F0%9D%97%B6%F0%9D%97%BF-%F0%9D%97%BC%F0%9D%97%B3-%F0%9D%98%80%F0%9D%97%BA%F0%9D%97%AE%F0%9D%97%BF%F0%9D%98%81-activity-7363649457780899840-HtZa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWN1iEBQnzRt50TOu40e-hHlZVj59PvTR0" },
        { text: "GitHub", type: "secondary", link: "https://github.com/kevinlinxc/viewlingo" }
      ],
      award: "YCombinator x Mentra Live Hackathon Winner",
      status: "active",
      tags: ["AI", "Smart Glasses", "Language Learning", "EdTech"]
    },
    {
      id: 2,
      title: "MedWise", 
      description: "An AI-powered prescription dashboard that helps patients and providers find cheaper, safer alternatives to brand-name drugs. MedWise compares prices, ingredients, side effects, and interactions, while surfacing generic equivalents and retailer options in real time.",
      buttons: [
        { text: "Visit", type: "primary", link: "https://www.linkedin.com/posts/anishkamatam_%F0%9D%97%A0%F0%9D%97%B6%F0%9D%97%B9%F0%9D%97%B9%F0%9D%97%B6%F0%9D%97%BC%F0%9D%97%BB%F0%9D%98%80-%F0%9D%97%BC%F0%9D%97%B3-%F0%9D%97%BD%F0%9D%97%B2%F0%9D%97%BC%F0%9D%97%BD%F0%9D%97%B9%F0%9D%97%B2-%F0%9D%97%BC%F0%9D%98%83%F0%9D%97%B2%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%AE%F0%9D%98%86-activity-7320167132120449024-lrDv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWN1iEBQnzRt50TOu40e-hHlZVj59PvTR0" },
        { text: "GitHub", type: "secondary", link: "#" }
      ],
      award: "2x Category SF Hacks Winner",
      status: "active",
      tags: ["AI", "Healthcare", "Drug Discovery", "Productivity"]
    },
    {
      id: 3,
      title: "Sentra",
      description: "A voice-powered disaster response system that enables seamless coordination between fire, medical, police, and NGO agents. Sentra leverages real-time translation, voice input, and intelligent knowledge retrieval to provide rapid, actionable insights during emergencies.",
      buttons: [
        { text: "Visit", type: "primary", link: "https://www.linkedin.com/posts/anishkamatam_%F0%9D%97%A6%F0%9D%98%82%F0%9D%97%BD%F0%9D%97%B2%F0%9D%97%BF-%F0%9D%97%B2%F0%9D%98%85%F0%9D%97%B0%F0%9D%97%B6%F0%9D%98%81%F0%9D%97%B2%F0%9D%97%B1-%F0%9D%98%81%F0%9D%97%BC-%F0%9D%98%80%F0%9D%97%B5%F0%9D%97%AE%F0%9D%97%BF%F0%9D%97%B2-activity-7325363605011378176-Z6eb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWN1iEBQnzRt50TOu40e-hHlZVj59PvTR0" },
        { text: "GitHub", type: "secondary", link: "https://github.com/AnishKamatam/sentra" }
      ],
      award: "AWS A2A x MCP Hackathon Winner",
      status: "active",
      tags: ["AI", "Disaster Response", "Emergency"]
    },
    {
      id: 4,
      title: "AGNI X",
      description: "An autonomous drone platform for early wildfire detection and tactical response. AGNI X integrates thermal imaging, LiDAR, and onboard AI to detect fire risks in real time, model spread patterns, and provide GPS-tagged alerts to first responders.",
      buttons: [
        { text: "Visit", type: "primary", link: "https://agnix.tech" }
      ],
      status: "active",
      tags: ["AI", "Drones", "Wildfire Detection", "DeepTech"]
    }
  ]

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-subtitle">Playground - Small MVP to Production Apps</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                {project.award && (
                  <div className="project-award">{project.award}</div>
                )}
              </div>
              <p className="project-description">{project.description}</p>
              
              <div className="project-links">
                {project.buttons.map((button, index) => (
                  <a 
                    key={index} 
                    href={button.link} 
                    className={`project-btn ${button.type}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {button.text}
                  </a>
                ))}
              </div>
              
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="coming-soon">
        Coming soon...
      </div>
    </div>
  )
}

export default Projects
