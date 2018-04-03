import React from 'react';
import ReactDOM from 'react-dom';
import {CheckBoxes} from './form.js';
export class contact extends React.Component {
  render(){
    return(
      <div className="contactUs">
        <h3>Ready To Order?</h3>
        <CheckBoxes />
      </div>
    )
  }
}
