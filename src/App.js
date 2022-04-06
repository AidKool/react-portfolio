import React from 'react';
import './assets/scss/bulma.scss';
import './assets/scss/reset.scss';
import Header from './Components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './Components/Footer';

function App() {
  return (
    <main>
      <Header />
      {/* <About /> */}
      <Portfolio />
      <Footer />
    </main>
  );
}

export default App;
