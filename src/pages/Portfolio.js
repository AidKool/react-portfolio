import React from 'react';

import Project from '../Components/Project';
import projects from '../data/projects';
import '../assets/scss/portfolio.scss';

function Portfolio() {
  return (
    <section className="portfolio-section mx-auto py-5">
      <div className="container">
        <ul className="projects columns is-multiline px-5">
          {projects.map((project) => (
            <Project
              key={project.id}
              github={project.github}
              live={project.live}
              image={project.image}
              header={project.header}
              description={project.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;