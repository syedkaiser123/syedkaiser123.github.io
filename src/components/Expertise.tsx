import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "python", 
    "celery", 
    "PostgreSQL", 
    "Redis", 
    "Hugging Face", 
    "AWS ECS", 
    "S3", 
    "GitHub", 
    "Docker"
];

const labelsSecond = [
    "Python", 
    "Redis", 
    "Celery", 
    "Kubernetes", 
    "PostgreSQL", 
    "Django", 
    "AWS", 
    "S3", 
    "pytest", 
    "GitHub",
    "Machine Learning",
    "predictive analysis",
    "NLP",
    "pandas",
    "matplotlib",
    "scikit-learn",
    "seaborn"
];

const labelsThird = [
    "python",
     "FastAPI", 
     "Hugging Face", 
     "OCR", 
     "Celery", 
     "PostgreSQL", 
     "pandas", 
     "GitHub", 
     "AWS", 
     "S3"
];

const labelsFourth = [
    "python",
    "Redis",
    "Celery",
    "REST",
    "postgresql",
    "GitHub",
    "Docker",
    "pytest",
    "AWS",
    "S3"
]

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>AI-Powered Customer Insight Platform</h3>
                    <ul>
                    <p> <li><strong>Contribution</strong>: Led 80% of backend microservices to power AI-driven insights from user feedback.</li>
                        <li><strong>Impact</strong>: Reduced API latency by 35%, processing by 45% via Redis optimization.</li>
                        <li><strong>Tools</strong>: PostgreSQL, Redis, Hugging Face, AWS ECS.</li>
                        <li><strong>AI Integration</strong>: Sentiment analysis & topic extraction APIs.</li>
                        <li><strong>Outcome</strong>: Reduced insight generation time from 20+ mins to under 5 mins.</li></p></ul>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Accuknox – Security Provisioning Platform</h3>
                    <p><ul>
                        <li><strong>Contribution:</strong> Led backend for predictive threat detection and real-time monitoring.</li>
                        <li><strong>Impact:</strong> ML-powered early warning system with automated mitigations.</li>
                        <li><strong>Tools:</strong> Python, Redis, Celery, Kubernetes, PostgreSQL, Django, AWS.</li>
                        <li><strong>Real-Time Monitoring</strong>: Continuous monitoring of security events and data traffic, providing instant alerts
                                    and action recommendations.</li>
                        <li><strong>Predictive Threat Analysis</strong>: Uses machine learning and predictive analytics to identify potential
                                    vulnerabilities in incoming client data before they are exploited.</li>
                    </ul></p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Intelligent Document Processing Pipeline</h3>
                    <p><ul>
                <li><strong>Contribution:</strong> Designed NLP-based pipeline for classification & summarization.</li>
                <li><strong>Impact:</strong> 80% reduction in manual review time; 1,000+ hours saved/month.</li>
                <li><strong>Tools:</strong> FastAPI, Hugging Face, OCR, Celery, PostgreSQL.</li>
                <li><strong>Outcome:</strong> +92% accuracy in automated document workflows.</li>
              </ul></p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>E-commerce Integration Platform</h3>
                    <p><ul>
                        <li><strong>Role:</strong> Backend Engineer – built microservices for e-com & logistics integration.</li>
                        <li><strong>Impact:</strong> Improved response time by 40% using Redis & query optimization.</li>
                    </ul></p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;