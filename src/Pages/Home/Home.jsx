import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Phrase from '../../Components/Phrase/Phrase';

import './home.css';

export default function Home() {
  return (
    <main className='home'>
      <Banner />
      <Phrase />
    </main>
  );
}
