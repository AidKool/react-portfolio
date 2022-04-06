import React from 'react';
import PropTypes from 'prop-types';

import { FiGithub, FiLink } from 'react-icons/fi';
import '../assets/scss/project.scss';

function Project({ id, github, live, image, header, description }) {
  return (
    <li className="project-item column is-6-tablet pt-2 pb-0" key={id}>
      <div className="project-links is-flex">
        <a
          href={github}
          className="has-background-white p-2 is-flex is-justify-content-center is-align-items-center"
          target="_blank"
          rel="noreferrer">
          <FiGithub className="has-text-black" />
        </a>
        <a
          href={live}
          className="has-background-white p-2 is-flex is-justify-content-center is-align-items-center"
          target="_blank"
          rel="noreferrer">
          <FiLink className="has-text-black" />
        </a>
      </div>
      <article>
        <figure>
          <img src={image} className="project-image" alt={header} />
        </figure>
        <div className="description has-text-centered p-2">
          <header className="has-text-weight-bold mb-2">{header}</header>
          <p className="px-3">{description}</p>
        </div>
      </article>
    </li>
  );
}

Project.propTypes = {
  id: PropTypes.number.isRequired,
  github: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;
