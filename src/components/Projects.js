
// Projects.js
import React from 'react';

const projects = [
  {
    title: 'Distributed Overengineered TODO API',
    technologies: 'Go, Python, Redis, Kafka',
    description: 'Designed a TODO API with CRUD functionality using PostgreSQL & PostgresDB, employing factory & strategy patterns to achieve SOLID design principles and extensibility to new data storage methods & query strategies.',
    link: 'https://github.com/AR-UNIT/TODO-LIST',
  },
  {
    title: 'Image Processing Application',
    technologies: 'Java',
    description: 'Image processing application in Java, accepting inputs from CLI, txt script file, or GUI to process transformations on images.',
    link: 'https://github.com/AR-UNIT/ImageProcessingApplication',
  },
  {
    title: 'Qthreads – Cooperative user space thread library',
    technologies: 'C',
    description: 'Implemented a user-space thread library in C, similar to POSIX threads, with thread creation, yielding, sleep, mutexes, and condition variables.',
    link: 'https://github.com/AR-UNIT/QThreads',
  },
  {
    title: 'Simple Linux Shell',
    technologies: 'C',
    description: 'A C-based Linux shell with command execution for internal & external commands, piping, & I/O redirection using fork.',
    link: 'https://github.com/AR-UNIT/SimpleLinuxShell',
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="panel">
          <div className="panel-header">
            {project.title} ({project.technologies})
            <a href={project.link} target="_blank" rel="noopener noreferrer">(GitHub)</a>
          </div>
          <div className="panel-body">
            {project.description}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
