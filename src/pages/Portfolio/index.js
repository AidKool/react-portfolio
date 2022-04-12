import React from 'react';
import Spinner from 'react-spinner-material';
import { after } from 'underscore';

import Project from '../../Components/Project';
import projects from '../../data/projects';

function Portfolio() {
  const [loading, setLoading] = React.useState(true);
  const projectsLength = projects.length;

  const onComplete = after(projectsLength, () => {
    setLoading(false);
  });

  const spinnerProps = {
    radius: 120,
    color: '#BE1A2C',
    stroke: 5,
    visible: true,
  };

  return (
    <section className="portfolio-section">
      <div className="container">
        <section className={loading ? '' : 'is-hidden'}>
          <Spinner
            radius={spinnerProps.radius}
            color={spinnerProps.color}
            stroke={spinnerProps.stroke}
            visible={spinnerProps.visible}
          />
        </section>
        <ul className={loading ? 'projects columns is-multiline px-5 is-hidden' : 'projects columns is-multiline px-5'}>
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              github={project.github}
              live={project.live}
              image={project.image}
              header={project.header}
              description={project.description}
              onComplete={onComplete}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
