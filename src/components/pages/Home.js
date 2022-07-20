import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Introduction from '../introduction';
import ContactMe from '../ContactMe';


function Home() {
  return (
    <>
      <Introduction />
      <Cards />
      <ContactMe />
    </>
  );
}

export default Home;
