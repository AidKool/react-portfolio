import React from 'react';

import qualifications from '../data/qualifications';

import '../assets/scss/qualifications.scss';

function Qualifications() {
  return (
    <section className="qualifications is-flex is-flex-direction-column is-centered">
      <header className="has-text-centered title">Qualifications</header>
      <ul className="qualifications-list">
        {qualifications.map((qualification, index) => (
          <li key={qualification.id} className={index > 0 ? 'list-item mt-2' : 'list-item'}>
            <article>
              <header className="has-text-weight-bold">{qualification.title}</header>
              <main>
                <p>
                  {qualification.school}: {qualification.date}
                </p>
                {qualification.completed ? (
                  <p>
                    View my <a href={qualification.certificate}>certificate</a>
                  </p>
                ) : (
                  <p>No certificate available</p>
                )}
              </main>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Qualifications;
