import React from 'react';

import skills from '../../data/skills';

import './skills.scss';

function Skills() {
  return (
    <section className="skills mt-5">
      <header className="has-text-centered title">Skills & Knowledge</header>
      <ul className="skills-list has-text-centered mx-auto">
        {skills.map((skill) => (
          <li key={skill.id}>{skill.text}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
