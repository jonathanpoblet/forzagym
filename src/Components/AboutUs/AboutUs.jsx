import { FaBookOpen } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import { CgGym } from 'react-icons/cg';
import './aboutUs.css';

export default function AboutUs() {
  return (
    <section className='aboutUs'>
      <article className='aboutUs-article'>
        <h2>
          ELEGÍ FORZA<span>GYM</span>
        </h2>
        <div className='aboutUs-info'>
          <p className='aboutUs-info-text'>
            En <span>Forza</span>GYM, creemos que el entrenamiento no solo
            mejora nuestro rendimiento, sino que también fortalece nuestros
            vínculos. Buscamos que nuestros miembros se sientan a gusto y, sobre
            todo, disfruten de su experiencia de <span>ejercicio.</span>
          </p>
          <p className='aboutUs-info-text'>
            Alcanzar tu máximo <span>potencial</span> no es un viaje solitario.
            Las conexiones y relaciones que establecemos en nuestras clases y
            con nuestros entrenadores nos transforman en algo más que un simple
            gimnasio.
          </p>
          <h3 className='aboutUs-info-subtitle'>
            SOMOS UNA <span>COMUNIDAD.</span>
          </h3>
          <h4>
            Te brindamos las mejores condiciones para que puedas cumplir tus
            objetivos
          </h4>
        </div>

        <div className='aboutUs-article-container'>
          <div className='aboutUs-article-container-points'>
            <FaBookOpen className='aboutUs-article-container-points-icon' />
            <h6 className='aboutUs-article-container-points-text'>
              Variedad de Clases y Programas de Entrenamiento
            </h6>
          </div>

          <div className='aboutUs-article-container-points'>
            <FaPerson
              id='info-icon2'
              className='aboutUs-article-container-points-icon'
            />
            <h6 className='aboutUs-article-container-points-text'>
              Profesionales Altamente Calificados y Apasionados
            </h6>
          </div>

          <div className='aboutUs-article-container-points'>
            <CgGym className='aboutUs-article-container-points-icon' />
            <h6 className='aboutUs-article-container-points-text'>
              Tecnología Innovadora y Equipamiento de Calidad
            </h6>
          </div>
        </div>
      </article>
    </section>
  );
}
