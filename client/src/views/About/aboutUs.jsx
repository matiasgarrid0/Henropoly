import React from "react";
import Flor from './Flor.jpg'
import Ludmi from './ludmi.jpeg'
import Mati from './mati.jpg'
import Alan from './Alan.jpg'
import jose from './jose.jpeg'
import seba from './seba.jpeg'
import facu from './Facu.jpg';

const AboutUs = () => {

  return (
    <div >
      <span> Desarroladores:</span>
      <div>
        <span>Ludmila Taborda</span>
        <img src={Ludmi} width='150' alt='img'/>
      </div>
      <div>
        <span>José Leonardo Agreda</span>
        <img src={jose} width='150' alt='img'/>
      </div>
      <div>
        <span>Florencia Hidalgo</span>
        <img src={Flor} width='150' alt='img'/>
      </div>
      <div>
        <span>Alan Giavino</span>
        <img  src={Alan} width='150' alt='img'/>
      </div>
      <div>
        <span>Facundo Rearte</span>
        <img src={facu} width='150' alt='img'/>
      </div>
      <div>
        <span>Sebastian Delescabe</span>
        <img src={seba} width='150' alt='img' />
      </div>
      <div>
        <span>Matias Garrido</span>
        <img src={Mati} width='150' alt='img'  />
      </div>
    </div>
  );
};

export default AboutUs;