import '../App.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "ViewLingo",
      description: "An immersive language learning platform built for smart glasses. ViewLingo displays real-time translations, contextual hints, and visual overlays to help users learn naturally through what they see and hear in the world around them.",
      buttons: [
        { text: "Visit", type: "primary", link: "https://www.linkedin.com/posts/anishkamatam_%F0%9D%9F%B0%F0%9D%9F%B4-%F0%9D%97%B5%F0%9D%97%BC%F0%9D%98%82%F0%9D%97%BF%F0%9D%98%80-%F0%9D%97%A2%F0%9D%97%BB%F0%9D%97%B2-%F0%9D%97%BD%F0%9D%97%AE%F0%9D%97%B6%F0%9D%97%BF-%F0%9D%97%BC%F0%9D%97%B3-%F0%9D%98%80%F0%9D%97%BA%F0%9D%97%AE%F0%9D%97%BF%F0%9D%98%81-activity-7363649457780899840-HtZa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWN1iEBQnzRt50TOu40e-hHlZVj59PvTR0" },
        { text: "GitHub", type: "secondary", link: "https://github.com/kevinlinxc/viewlingo" }
      ],
      award: "YCombinator x Mentra Live Hackathon Winner",
      status: "active",
      tags: ["AI", "Smart Glasses", "AR", "EdTech", "Language Learning"]
    },
    {
      id: 2,
      title: "MedWise", 
      description: "A prescription dashboard that helps patients and providers find affordable and safe alternatives to brand-name drugs. MedWise compares ingredients, side effects, and pricing across multiple retailers to highlight lower-cost options without compromising quality.",
      buttons: [
        { text: "Visit", type: "primary", link: "https://www.linkedin.com/posts/anishkamatam_%F0%9D%97%A0%F0%9D%97%B6%F0%9D%97%B9%F0%9D%97%B9%F0%9D%97%B6%F0%9D%97%BC%F0%9D%97%BB%F0%9D%98%80-%F0%9D%97%BC%F0%9D%97%B3-%F0%9D%97%BD%F0%9D%97%B2%F0%9D%97%BC%F0%9D%97%BD%F0%9D%97%B9%F0%9D%97%B2-%F0%9D%97%BC%F0%9D%98%83%F0%9D%97%B2%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%AE%F0%9D%98%86-activity-7320167132120449024-lrDv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWN1iEBQnzRt50TOu40e-hHlZVj59PvTR0" },
        { text: "GitHub", type: "secondary", link: "#" }
      ],
      award: "2x Category SF Hacks Winner",
      status: "active",
      tags: ["AI", "Healthcare", "Drug Discovery", "Cost Optimization"]
    },
    {
      id: 3,
      title: "Sentra",
      description: "A disaster response system that connects fire, medical, police, and NGO teams through one coordinated interface. Sentra uses translation, knowledge retrieval, and natural communication to generate quick, clear insights during emergencies.",
      buttons: [
        { text: "Visit", type: "primary", link: "https://www.linkedin.com/posts/anishkamatam_%F0%9D%97%A6%F0%9D%98%82%F0%9D%97%BD%F0%9D%97%B2%F0%9D%97%BF-%F0%9D%97%B2%F0%9D%98%85%F0%9D%97%B0%F0%9D%97%B6%F0%9D%98%81%F0%9D%97%B2%F0%9D%97%B1-%F0%9D%98%81%F0%9D%97%BC-%F0%9D%98%80%F0%9D%97%B5%F0%9D%97%AE%F0%9D%97%BF%F0%9D%97%B2-activity-7325363605011378176-Z6eb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWN1iEBQnzRt50TOu40e-hHlZVj59PvTR0" },
        { text: "GitHub", type: "secondary", link: "https://github.com/AnishKamatam/sentra" }
      ],
      award: "AWS A2A x MCP Hackathon Winner",
      status: "active",
      tags: ["AI", "Disaster Response", "Emergency Tech", "Coordination"]
    },
    {
      id: 4,
      title: "AGNI X",
      description: "An autonomous drone platform for early wildfire detection and tactical support. AGNI X combines thermal vision, LiDAR mapping, and onboard modeling to identify fire risks, track spread patterns, and send GPS-based alerts to first responders in real time.",
      buttons: [
        { text: "Visit", type: "primary", link: "https://agnix.tech" },
        { text: "Paper", type: "secondary", link: "/Autonomous_Drone_Systems_for_Low_Cost_Early_Wildfire_Detection_and_Tactical_Response.pdf" }
      ],
      status: "active",
      tags: ["AI", "Drones", "Wildfire Detection", "DeepTech", "Climate Resilience"]
    },
    {
      id: 5,
      title: "Equinox",
      description: "A modern inventory management system built for brick and mortar businesses. Equinox helps store owners track stock levels, identify gaps, and generate insights through natural language search and automated visualizations, making inventory control faster, simpler, and more transparent.",
      buttons: [
        { text: "GitHub", type: "secondary", link: "https://github.com/AnishKamatam/equinox" }
      ],
      status: "active",
      tags: ["AI", "Inventory Management", "Retail Tech", "Automation", "Data Visualization"]
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
