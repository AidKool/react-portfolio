import React from 'react';

import { FaLaptopCode, FaUserGraduate, FaUserNinja, FaCity } from 'react-icons/fa';

import '../assets/scss/facts.scss';

function Facts() {
  return (
    <>
      <header className="has-text-weight-bold mb-2">Five things about me</header>
      <ul className="is-flex is-flex-direction-column is-justify-content-space-between">
        <li className="list-item is-flex is-align-items-center">
          <FaLaptopCode className="mr-2" />
          Full Stack Developer
        </li>
        <li className="list-item is-flex is-align-items-center">
          <FaUserGraduate className="mr-2" />
          Final year CIS student
        </li>
        <li className="list-item is-flex is-align-items-center">
          <FaUserNinja className="mr-2" />
          Full time Geek
        </li>
        <li className="list-item is-flex is-align-items-center">
          <FaCity className="mr-2" />
          Born and raised in Barcelona
        </li>
        <li className="list-item is-flex is-align-items-center">
          <FaCity className="mr-2" />
          Currently living in Salford
        </li>
      </ul>
    </>
  );
}

export default Facts;
