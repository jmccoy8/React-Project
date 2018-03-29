import React from 'react';
import ReactDOM from 'react-dom';
import needle from './needle.png';

export class About extends React.Component {
  render(){
    return(
      <div className="aboutTab">
        <div className="aboutText">
          <h1>Where we make the Best Misfit Knits</h1>
          <p>Here at the yarn barn we are committed to making you the best handcrafted knits for all your yarn filled needs. Each project is made with much love and care and we will not settle for anything less than perfection. Our favorite thing is making the customer happy and spreading the joy of something we love to do with others.</p>
        </div>
        <img src={needle} class="rounded float-right" alt="crochet needle" />
      </div>
    )
  }
}

export default About;
