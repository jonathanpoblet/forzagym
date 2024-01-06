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
        <h4>
          Te brindamos las mejores condiciones para que puedas cumplir tus
          objetivos
        </h4>

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
