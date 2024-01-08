import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './plans.css';

export default function Plans() {
  const handleClick = message => {
    window.open(`https://api.whatsapp.com/send?phone=1130565913&${message}`, '_blank');
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='plans'>
      <h2 className='plans-title' data-aos='fade-up' data-aos-offset='200' data-aos-easing='ease-in-sine' data-aos-duration='600'>
        PLANES
      </h2>
      <div className='plans-container' data-aos='fade-up' data-aos-offset='200' data-aos-easing='ease-in-sine' data-aos-duration='600'>
        <div className='plans-container-card' onClick={() => handleClick('text=Hola,%20quiero%20consultar%20para%20empezar%20musculación!')}>
          <img className='plans-container-card-img' src='assets/plans/plans1.png' alt='Card 1' />
          <button className='plans-container-card-button'>MUSCULACIÓN</button>
        </div>
        <div className='plans-container-card' onClick={() => handleClick('text=Hola,%20quiero%20consultar%20sobre%20las%20clases%20grupales!')}>
          <img className='plans-container-card-img' src='assets/plans/plans2.png' alt='Card 2' />
          <button className='plans-container-card-button'>CLASES GRUPALES</button>
        </div>
        <div className='plans-container-card' onClick={() => handleClick('text=Hola,%20quiero%20consultar%20para%20empezar%20funcional!')}>
          <img className='plans-container-card-img' src='assets/plans/plans3.png' alt='Card 3' />
          <button className='plans-container-card-button'>FUNCIONAL</button>
        </div>
      </div>
      <button
        onClick={() => handleClick('text=Hola,%20quiero%20consultar%20sobre%20sus%20planes!')}
        data-aos='fade-up'
        data-aos-offset='50'
        data-aos-easing='ease-in-sine'
        data-aos-duration='600'
        className='plans-consultar'
      >
        Consultar
      </button>
    </section>
  );
}
