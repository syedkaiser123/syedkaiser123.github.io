import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="March 2024 - July 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Mirafra Technologies Private Limited - Client CISCO</h4>
            <p>
              <ul>
                <li><strong>Database Optimization</strong>: Utilized SQLAlchemy for building scalable database models and optimized
                complex queries for high-volume(75%) transactional systems in PostgreSQL.</li>
                <li><strong>Real-Time Data Processing</strong>: Built real-time data pipelines using Celery and RabbitMQ, enabling
                seamless order tracking and logistics management with 99% uptime.</li>
                <li><strong>Automated Testing</strong>: Integrated automated testing into the CI pipeline, significantly reducing defects in
                production releases. Conducted load testing to simulate peak traffic conditions and ensure stability.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 2022 - Januarry 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Python Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Accuknox</h4>
            <p>
              <ul>
                <li><strong>Scalable System Design</strong>: Spearheaded the design and implementation of a Python-based Cyber Security
                system handling millions of daily transactions for global e-commerce merchants, ensuring 99.99%
                uptime.</li>
                <li><strong>Code Quality & Testing</strong>: Led code reviews, ensuring best practices in code quality and maintainability.
                Wrote comprehensive unit and integration tests using Pytest, achieving 95% code coverage for critical
                modules.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - November 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Recosense Infosolutions Pvt Ltd</h4>
            <p>
              <ul>
                <li>Responsible for creating and maintaining the deployed services for the clients.</li>
                <li>Responsible to perform R&D over the time to add to the existing system and make it more flexible and
                efficient.</li>
                <li>Worked on some intriguing projects like PDF tabular data extraction, Microsoft Teams AI speech to text
                transcriber.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2021 - April 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Associate Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sacumen</h4>
            <p>
              <ul>
                <li>Worked at Sacumen as an Associate software developer. In the beginning, I used to carry out simple
                tasks like code cleaning, R&D, side barging in client meetings and more.</li>
                <li>After 6 months, I started developing small features for the clients like building a connector for Splunk
                integration. These connectors were responsible for performing threat detection based on different
                metrics on the client's incoming data and provide necessary actions to prevent future attacks of known
                and unknown nature and also prevent data loss.</li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;