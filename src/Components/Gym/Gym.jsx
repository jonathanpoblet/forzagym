import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './gym.css';

// eslint-disable-next-line react/prop-types
export default function Gym() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='gym'>
      <h2 className='gym-title' data-aos='fade-up' data-aos-offset='200' data-aos-easing='ease-in-sine' data-aos-duration='600'>
        VISITANOS
      </h2>
      <p className='gym-subtitle' data-aos='fade-up' data-aos-offset='200' data-aos-easing='ease-in-sine' data-aos-duration='600'>
        Av. Hipólito Yrigoyen 9183,
      </p>
      <p className='gym-subtitle' data-aos='fade-up' data-aos-offset='200' data-aos-easing='ease-in-sine' data-aos-duration='600'>
        Lomas de Zamora,
      </p>
      <p className='gym-subtitle' data-aos='fade-up' data-aos-offset='200' data-aos-easing='ease-in-sine' data-aos-duration='600'>
        Provincia de Buenos Aires
      </p>
      <article className='gym-container' data-aos='fade-up' data-aos-offset='200' data-aos-easing='ease-in-sine' data-aos-duration='600'>
        <img className='gym-container-img' src='./assets/gym/gym1.png' />
        <img className='gym-container-img' src='./assets/gym/gym2.png' />
      </article>
    </section>
  );
}
