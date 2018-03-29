import React from 'react';
import ReactDOM from 'react-dom';

export class Jumbo extends React.Component {
  render(){
    return(
      <div class="jumbotron">
        <div className="jumboText">
            <h1 class="display-4">Welcome to the Yarn Barn!</h1>
            <p class="lead">Thank you for visiting our digital shop! Please browse our slection of handcrafted crochet and knit gifts.</p>
        </div>
      </div>
    )
  }
}
