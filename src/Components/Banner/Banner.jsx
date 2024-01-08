import React from 'react';
import './banner.css';

export default function Banner() {
  return (
    <section className='banner'>
      <article className='banner-container'>
        <img className='banner-container-forza' src='assets/banner/forza.png' alt='forza' />
        <h1 className='banner-container-title'>
          <span>Forza</span>GYM
        </h1>
        <h2 className='banner-container-subtitle'>WELCOME TO THE JUNGLE</h2>
      </article>
    </section>
  );
}
