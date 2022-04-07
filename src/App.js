import React from 'react';
import './assets/scss/bulma.scss';
import './assets/scss/reset.scss';
import './assets/scss/common.scss';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  const [currentPage, setCurrentPage] = React.useState('about');

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Main currentPage={currentPage} />
      <Footer />
    </>
  );
}

export default App;
