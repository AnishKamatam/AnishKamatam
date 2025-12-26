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
  const lineHeight = scrollY > 10 ? Math.min(scrollY * 3, 3000) : 0
  
  // Define timeline nodes at specific positions
  const timelineNodes = [
    { 
      id: 1, 
      position: 150, 
      label: "Started at Palantir Technologies", 
      date: "Nov 2025 - Present",
      jobTitle: "Software Engineer Fellow • Palantir Technologies",
      description: "UAV data pipelines and ML inference workflows",
      responsibilities: [
        "Built UAV batch/streaming ML pipelines in Palantir Foundry with telemetry normalization and lineage-tracked inference outputs",
        "Deployed YOLOv8/ResNet-50 inference and FAISS-backed RAG pipelines on Palantir AIP for maintenance triage.",
        "Instrumented ML observability pipelines, tracking drift, data integrity, and inference reliability with Evidently inside Foundry."
      ],
      techStack: ["Palantir Foundry", "Palantir AIP", "YOLOv8", "ResNet-50", "FAISS", "RAG", "Evidently", "ML Observability", "Batch/Streaming ML Pipelines", "Computer Vision", "Deep Learning", "Python"]
    },
    { 
      id: 2, 
      position: 550, 
      label: "Started at FoodHealth Company", 
      date: "Nov 2025 - Present",
      jobTitle: "AI/ML Intern • FoodHealth Company",
      description: "ML + Agentic AI Systems for Nutrition Intelligence Applications (Kroger, Albertsons, etc.)",
      responsibilities: [
        "Trained XGBoost classifiers and regressors on large-scale tabular datasets, optimizing hyperparameters with Optuna for low-latency inference.",
        "Implemented a feature pipeline with quantile scaling, target-encoded categorical variables, and polynomial interaction terms optimized for tree-based models.",
        "Built a model audit suite combining SHAP value decomposition, 5-fold cross-validation, and KS-statistic drift checks to validate boosted model stability."
      ],
      techStack: ["XGBoost", "Optuna (Hyperparameter Optimization)", "scikit-learn", "LightGBM", "Model Development", "Feature Engineering", "Tree-Based Models", "Python"]
    },
    { 
      id: 3, 
      position: 950, 
      label: "Started Research at UC Berkeley", 
      date: "October 2025 - Present",
      jobTitle: "Undergraduate Research Assistant • UC Berkeley Network and Systems Lab",
      description: "Bandwidth Allocation for Cloud-Augmented Autonomous Drones",
      responsibilities: [
        "Implemented bandwidth-aware offloading for autonomous drone perception pipelines, reducing end-to-end latency by 24% and enabling deployment of vision models 3.1× larger than onboard limits.",
        "Designed and evaluated real-time network allocation algorithms under 5G constraints, improving decision reliability by 31% and perception accuracy by 15% across 1000+ flight simulations."
      ],
      techStack: ["Computer Networking", "Bandwidth Management", "Python", "Cloud Robotics", "C++", "Applied AI", "Autonomous Vehicles", "Network Simulation", "TensorRT", "CUDA"]
    },
    { 
      id: 4, 
      position: 1350, 
      label: "Started at FundMore AI", 
      date: "May 2025 - Nov 2025",
      jobTitle: "AI Engineer • FundMore AI",
      description: "Automated Underwriting For Loans and Mortgages",
      responsibilities: [
        "Designed a secure NL-to-SQL analytics system using Vertex AI, enabling natural language access to mortgage data while ensuring 0 tenant data leakage.",
        "Developed a multi-tenant AI assistant using TypeScript, Angular, Node.js, and Sequelize, serving 1,000+ users across 50+ organizations.",
        "Built a dynamic mentions system to enrich LLM prompts with structured context, improving response relevance for metrics queries by 30%, enhancing system transparency for end users."
      ],
      techStack: ["Google Cloud Platform (GCP)", "AWS Lambda", "PostgreSQL", "Natural Language Processing (NLP)", "REST APIs", "Backend Engineering", "Amazon SQS", "Node.js", "Large Language Models (LLM)", "TypeScript", "Applied AI", "Git"]
    },
    { 
      id: 5, 
      position: 1750, 
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
      id: 6, 
      position: 2150, 
      label: "Founded AGNI X", 
      date: "April 2025 - Present",
      jobTitle: "AGNI X • Lead ML Engineer",
      description: "Autonomous Drone for Wildfire Detection & Spread Modeling",
      responsibilities: [
        "Developed an autonomous drone system for early wildfire detection and structural fire assessment using thermal imaging, computer vision, and 3D modeling using LiDar sensors.",
        "Built and optimized real-time computer vision models with YOLOv8 and custom CNN pipelines on NVIDIA Jetson Nano, enabling onboard fire detection, classification, and risk prioritization."
      ],
      techStack: ["Embedded Systems", "PyTorch", "Python", "C++", "Computer Vision", "TensorFlow", "Deep Learning", "Applied AI", "Applied Machine Learning"]
    },
    { 
      id: 7, 
      position: 2550, 
      label: "Led Hackathon Projects", 
      date: "May 2024 - Sep 2024",
      jobTitle: "Software Engineer Intern • TraceCloud",
      description: "Requirements Management and Traceability Software",
      responsibilities: [
        "Engineered a GraphRAG pipeline that modeled requirements, dependencies, and Jira artifacts as graph embeddings, enabling low-latency semantic retrieval and cutting manual trace analysis by 30%.",
        "Optimized backend services to handle real-time log ingestion at scale, resolving 3+ performance bottlenecks and improving system throughput."
      ],
      techStack: ["REST APIs", "Backend Engineering", "Continuous Integration and Continuous Delivery (CI/CD)", "Cloud Infrastructure", "Large Language Models (LLM)", "TypeScript", "Back-End Web Development", "Applied AI", "Retrieval-Augmented Generation (RAG)"]
    }
  ]
  
  console.log('Scroll Y:', scrollY, 'Line Height:', lineHeight) // Debug log

  return (
    <div className="text-container experience-container">
       <div className="hero-section">
         <h1 className="hero-title">Changelog from my journey</h1>
         <h2 className="hero-subtitle">I've been working at Palantir Technologies.</h2>
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
