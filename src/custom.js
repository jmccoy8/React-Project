import React from 'react';
import ReactDOM from 'react-dom';
import {EssayForm} from './form.js';
import {FlavorForm} from './form.js';

export class contact extends React.Component {
  render(){
    return(
      <div className="contactUs">
        <h1>Ready to Order?</h1>
        <EssayForm />
        <FlavorForm />
      </div>
    )
  }
}
