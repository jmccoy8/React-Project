import React from 'react';
import {NavBar} from './header';
import {Jumbo} from './header';
import {BlogCard} from './card.js';
import styles from './App.css';
import {About} from './about.js';
import {Gallery} from './gallery.js';
import {contact} from './custom.js';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
    <div>
            <Jumbo />
            <div className="headerNav">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <Link className="nav-link" to="/">About Us</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/gallery">Gallery</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/custom">Contact Us</Link>
                </li>
              </ul>
            </div>


            <Switch>
                 <Route exact path='/' component={About} />
                 <Route exact path='/gallery' component={Gallery} />
                 <Route exact path='/custom' component={contact} />
              </Switch>

  </div>
    )
  }
}
export default App
