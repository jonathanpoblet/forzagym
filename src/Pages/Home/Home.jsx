import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Banner from '../../Components/Banner/Banner';
import Phrase from '../../Components/Phrase/Phrase';

import './home.css';

export default function Home() {
  return (
    <main className='home'>
      <Banner />
      <Phrase
        phrase='Nadie puede detenerte si tienes la determinación y la pasión necesaria
        para alcanzar tus metas'
      />
      <AboutUs />
    </main>
  );
}
