import React from 'react';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Banner from '../../Components/Banner/Banner';
import Gym from '../../Components/Gym/Gym';
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
      <Phrase phrase='Un mes lleno de disciplina puede llevarte más lejos que un año lleno de excusas' />
      <Gym
        src1='./assets/banner/banner.jpg'
        src2='./assets/gym/gym1.png'
        src3='./assets/gym/gym1.png'
      />
    </main>
  );
}
