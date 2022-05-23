import React from 'react';

import './bio.scss';

function Bio() {
  return (
    <article>
      <header className="is-size-4 has-text-weight-bold">About me</header>
      <p className="bio-paragraph">I was born and raised in Barcelona and now I&rsquo;m living in Manchester, UK.</p>
      <p className="mt-2 bio-paragraph">
        I hold a degree in Electronic Engineering from the university <a href="https://www.upc.edu/en">UPC</a> and after
        realising it was not what I wanted to do the rest of my life I got a job in an unrelated field. Being a geek
        I&rsquo;ve always loved computers and video-games so after trying to find my way for a while I decided to take
        the plunge and enroll in a BSc in Computing and Information Systems through the{' '}
        <a href="University of London">University of London</a> which I recently completed in May 2022.
      </p>
      <p className="mt-2 bio-paragraph">
        In addition, I have also recently completed a Full Stack Development Certificate through the{' '}
        <a href="https://www.manchester.ac.uk/">University of Manchester</a> where I had the opportunity to learn from
        very talented instructors and work along classmates to build group projects using technologies like the{' '}
        <span className="has-text-weight-bold">MERN stack</span>, <span className="has-text-weight-bold">GraphQL</span>,
        and <span className="has-text-weight-bold">JWT tokens</span>.
      </p>
      <p className="mt-2 bio-paragraph">
        I&rsquo;m currently learning <span className="has-text-weight-bold">TypeScript</span> and developing a full
        stack job application tracker built with the <span className="has-text-weight-bold">MERN stack</span>,{' '}
        <span className="has-text-weight-bold">TypeScript</span>,{' '}
        <span className="has-text-weight-bold">Material UI</span> and{' '}
        <span className="has-text-weight-bold">GraphQL</span>. I&rsquo;m looking for an opportunity to be a part of a
        team and contribute to building modern, scalable and responsive web applications. I&rsquo;m very excited about
        what the future holds.
      </p>
      <p className="mt-2 bio-paragraph">Please don&rsquo;t hesitate to get in touch!</p>
    </article>
  );
}

export default Bio;
