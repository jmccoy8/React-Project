import React from 'react';
import ReactDOM from 'react-dom';
import pika from './pika.png';
import mikka from './Make-ME.jpg';
import flamingo from './flamingo.JPG';
import baby from './baby.jpeg';
import baymax from './Baymax.png';
import fairy from './fairy.jpg';
import unicorn from './unicorn.jpg';
import skate from './skate.jpg';
import prince from './prince.jpeg';
import mimik from './mimic.jpg';
import eleven from './eleven.jpg';
import jig from './jiggly.jpeg';


export class BlogCard extends React.Component {
  render(){
    return(
  <div className="galleryCards">
      <div className="card">
        <img className="card-img-top" src={pika} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Pikachu</h5>
          <p className="card-text">Did you start your journey like Ash and insist on Pikachu as your starter pokemon? If so than this guy is perfect for you.</p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={mikka} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Mini Me</h5>
          <p className="card-text">Ever wanted to see yourself or a loved one in yarn form?? Now you can!</p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={flamingo} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Flamingo</h5>
          <p className="card-text">One of the most unique creatures in the animal kingdom, adopt your very own flamingo today.</p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={baby} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Baby Hat</h5>
          <p className="card-text">A snuggly fit cap for babies, modeled perfectly by our resident yarn barn kitten!</p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={baymax} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Baymax</h5>
          <p className="card-text">Need your own Baymax to be your best friend?</p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={fairy} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Fairy</h5>
          <p className="card-text">A mystical fairy to fulfill all your fantastical wishes and be your best friend!</p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={skate} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Baby Skate Booties</h5>
          <p className="card-text">Is your little one destined for the rink? Get them started with their first pair of skates today!</p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={unicorn} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Unicorn</h5>
          <p className="card-text">Who could refuse their very own unicorn? Now is your chance to adopt a unicorn or perhaps a mini-corn if it so suits you!</p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={prince} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Pup-Alike!</h5>
          <p className="card-text">This handsome fella was a custom ordered pet look-alike! You can order a copy of him if you like, or your own custom pup!</p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={mimik} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Mimikyu</h5>
          <p className="card-text">From the new Aloha generation of Pokemon meet Mimikyu! This shy little cutie would love to join your party.</p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={eleven} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Stranger Things Eleven</h5>
          <p className="card-text">Form the huge hit Netflix series, Eleven!</p>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={jig} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Iggly Jiggly Wiggly</h5>
          <p className="card-text">The great Pokemon trio Igglybuff, Jigglypuff, and Wigglytuff! Catch them all!</p>
        </div>
      </div>

</div>
    )
  }
}
