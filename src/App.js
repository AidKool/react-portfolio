import React from 'react';
import './assets/scss/bulma.scss';
import './assets/scss/reset.scss';
import './assets/scss/common.scss';

import Header from './Components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Components/Footer';

function App() {
  return (
    <main>
      <Header />
      {/* <About /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
      <Resume />
      <Footer />
    </main>
  );
}

export default App;
