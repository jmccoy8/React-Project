import React from 'react';
import ReactDOM from 'react-dom';
import {BlogCard} from './card.js';
import { Link, Route, Switch } from 'react-router-dom';


export class Gallery extends React.Component {
  render(){
    return(
      <div className="galleryTab">
        <div className="galleryTabText">
          <h1>The Barn with all the Yarn</h1>
          <p>Ready to Order? Head to <Link to="/custom">Contact Us</Link>!</p>
        </div>
        <BlogCard />



      </div>
    )
  }
}
