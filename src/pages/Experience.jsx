import { useState, useEffect, useRef } from 'react'

function Experience() {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const mainContent = document.querySelector('.main-content')
      if (mainContent) {
        setScrollY(mainContent.scrollTop)
      }
    }
    
    const mainContent = document.querySelector('.main-content')
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll)
      return () => mainContent.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Calculate line height based on scroll position - only show when scrolling
  const lineHeight = scrollY > 10 ? Math.min(scrollY * 3, 2000) : 0
  
  // Define timeline nodes at specific positions
  const timelineNodes = [
    { 
      id: 1, 
      position: 150, 
      label: "Started at FundMore AI", 
      date: "May 2025 - Present",
      jobTitle: "AI Engineer • FundMore AI",
      description: "Automated Underwriting For Loans and Mortgages",
      responsibilities: [
        "Designed a secure NL-to-SQL analytics system using Vertex AI, enabling natural language access to mortgage data while ensuring 0 tenant data leakage.",
        "Developed a multi-tenant AI assistant using TypeScript, Angular, Node.js, and Sequelize, serving 1,000+ users across 50+ organizations.",
        "Built a dynamic mentions system to enrich LLM prompts with structured context, improving response relevance for metrics queries by 30%, enhancing system transparency for end users."
      ],
      techStack: ["Python", "SQL", "Vertex AI", "GCP", "Angular", "Node.js", "Sequelize"]
    },
    { 
      id: 2, 
      position: 550, 
      label: "Built SQL Analytics System", 
      date: "June 2025 - August 2025",
      jobTitle: "Data Science Extern • Amazon",
      description: "Employee Review Analytics for Workforce Retention",
      responsibilities: [
        "Built an onboarding review triage system using MiniLM embeddings and LightGBM to rank early employee attrition risk",
        "Preprocessed 5K+ employee reviews with pandas and scikit-learn; improved precision@10 by 18% over baseline",
        "Applied SHAP to explain LightGBM rankings, highlighting influential tokens in the top 10% of high-risk flagged reviews"
      ],
      techStack: ["Python", "LightGBM", "MiniLM", "NLP", "scikit-learn", "SHAP"]
    },
    { 
      id: 3, 
      position: 950, 
      label: "Founded AGNI X", 
      date: "April 2025 - Present",
      jobTitle: "AGNI X • Lead ML Engineer",
      description: "Autonomous Drone for Wildfire Detection & Spread Modeling",
      responsibilities: [
        "Developed an autonomous drone system for early wildfire detection and structural fire assessment using thermal imaging, computer vision, and 3D modeling using LiDar sensors.",
        "Built and optimized real-time computer vision models with YOLOv8 and custom CNN pipelines on NVIDIA Jetson Nano, enabling onboard fire detection, classification, and risk prioritization."
      ],
      techStack: ["Python", "C++", "PyTorch", "YOLOv8", "OpenCV", "CUDA", "Jetson", "Flask", "Next.js"]
    },
    { 
      id: 4, 
      position: 1350, 
      label: "Led Hackathon Projects", 
      date: "May 2024 - Sep 2024",
      jobTitle: "Software Engineer Intern • TraceCloud",
      description: "Requirements Management and Traceability Software",
      responsibilities: [
        "Engineered a GraphRAG pipeline that modeled requirements, dependencies, and Jira artifacts as graph embeddings, enabling low-latency semantic retrieval and cutting manual trace analysis by 30%.",
        "Optimized backend services to handle real-time log ingestion at scale, resolving 3+ performance bottlenecks and improving system throughput."
      ],
      techStack: ["Python", "Neo4j", "Flask", "REST APIs"]
    }
  ]
  
  console.log('Scroll Y:', scrollY, 'Line Height:', lineHeight) // Debug log

  return (
    <div className="text-container experience-container">
       <div className="hero-section">
         <h1 className="hero-title">Changelog from my journey</h1>
         <h2 className="hero-subtitle">I've been working at FundMore AI for the past 6 months.</h2>
         <p className="hero-timeline-text">Here's a timeline of my journey.</p>
         {/* Background grey line - always visible */}
         <div className="background-line"></div>
         
         {/* Purple animated line that grows with scroll */}
         <div 
           className="hero-line animated-line" 
           style={{ height: `${lineHeight}px` }}
         ></div>
         
         {/* Timeline nodes - always visible */}
         {timelineNodes.map((node) => (
           <div key={node.id} className="timeline-item" style={{ top: `${80 + node.position}px` }}>
             <div
               className="timeline-node"
               title={node.label}
             ></div>
             <div className="timeline-date">{node.date}</div>
           </div>
         ))}
       </div>
      
                <div className="content-section">
                  {/* Job details for each timeline node */}
                  {timelineNodes.map((node) => (
                    <div 
                      key={`job-${node.id}`} 
                      className="experience-details" 
                      style={{ top: `${80 + node.position - 130}px` }}
                    >
                      <div className="job-detail">
                        <div className="timeline-date">{node.date}</div>
                        <h3 className="job-title">{node.jobTitle}</h3>
                        <p className="job-description">{node.description}</p>
                        <ul className="job-responsibilities">
                          {node.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                          ))}
                        </ul>
                        <div className="tech-stack">
                          {node.techStack.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
    </div>
  )
}

export default Experience
