import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHollyBerry, faGifts , faCandyCane} from '@fortawesome/free-solid-svg-icons';


function About(props) {
  return (
    <div>
      <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="section-heading text-uppercase">2021</h1>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
         <FontAwesomeIcon icon={faGifts} size={"2x"}/>
          <h4 className="about-heading">Gift Time</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
         <FontAwesomeIcon icon={faCandyCane} size={"2x"}/>
          <h4 className="about-heading">Candy Cane</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <FontAwesomeIcon icon={faHollyBerry} size={"2x"}/>
          <h4 className="about-heading">Holly Berry</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}

export default About;
