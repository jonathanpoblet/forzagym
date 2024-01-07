import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './gym.css';

// eslint-disable-next-line react/prop-types
export default function Gym() {
  return (
    <section className='gym'>
      <h2 className='gym-title'>VISITANOS</h2>
      <p className='gym-subtitle'>Av. Hipólito Yrigoyen 9183,</p>
      <p className='gym-subtitle'>Lomas de Zamora,</p>
      <p className='gym-subtitle'>Provincia de Buenos Aires</p>
      <article className='gym-container'>
        <img className='gym-container-img' src='./assets/gym/gym1.png' />
        <img className='gym-container-img' src='./assets/gym/gym2.png' />
      </article>
    </section>
  );
}
