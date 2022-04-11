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
        the plunge an enroll in a BSc in Computing and Information Systems through the{' '}
        <a href="University of London">University of London</a>.
      </p>
      <p className="mt-2 bio-paragraph">
        I&rsquo;m now working on my final year project which involves creating a secure digital ID easily verifiable
        using <a href="https://en.wikipedia.org/wiki/Blockchain">Blockchain</a> technology and easily shared using{' '}
        <a href="https://en.wikipedia.org/wiki/QR_code">QR codes</a>. In addition, I&rsquo;m also enrolled in a Full
        Stack Development programme through the <a href="https://www.manchester.ac.uk/">University of Manchester</a>.
      </p>
      <p className="mt-2 bio-paragraph">
        I&rsquo;m now looking for an opportunity to be a part of a team and contribute to building modern, scalable and
        responsive web applications. I&rsquo;m very excited about the future holds.
      </p>
      <p className="mt-2 bio-paragraph">Please don&rsquo;t hesitate to get in touch!</p>
    </article>
  );
}

export default Bio;
