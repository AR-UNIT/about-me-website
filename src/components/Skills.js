// Skills.js
import React from 'react';

const skills = [
  {
    title: 'Low-Level Development',
    items: ['C', 'GDB', 'Valgrind'],
  },
  {
    title: 'Data Engineering',
    items: ['ETL', 'SQL', 'Spark', 'Delta Lake', 'Data Modeling'],
  },
  {
    title: 'Programming Languages & Backend',
    items: ['Python', 'Java', 'Scala', 'Go', 'API Development', 'PostgresDB', 'Kafka', 'Redis'],
  },
  {
    title: 'Orchestration & Dev Tools',
    items: ['Kubernetes', 'ArgoWorkflow', 'Docker', 'AWS S3', 'AWS SNS', 'AWS SQS', 'Git'],
  },
  {
    title: 'Software Engineering',
    items: ['CI/CD', 'Agile Development', 'Test Driven Development', 'Code Reviews', 'SOLID', 'Problem Solving Design'],
  },
  {
    title: 'Collaboration',
    items: ['Excellent communication skills', 'Cross-functional collaboration', 'Domain knowledge interest'],
  },
];

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <h3>{skill.title}</h3>
            <p>{skill.items.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;