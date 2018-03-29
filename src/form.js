import React from 'react';
import ReactDOM from 'react-dom';

export class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please give a detailed description of the custom product you would like to order.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Custom Order:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Pikachu'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          What would you like to order:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="pikka">Pikachu</option>
            <option value="mikka">Mini-Me</option>
            <option value="flamingo">Flamingo</option>
            <option value="baby">Baby Hat</option>
            <option value="baymax">Baymax</option>
            <option value="fairy">Fairy</option>
            <option value="skate">Baby Skate Booties</option>
            <option value="unicorn">Unicorn</option>
            <option value="unicorn">Mini-Corn</option>
            <option value="prince">Pup-Alike</option>
            <option value="mimik">Mimikyu</option>
            <option value="eleven">Stranger Things Eleven</option>
            <option value="jig">Igglybuff</option>
            <option value="jig">Jigglypuff</option>
            <option value="jig">Wigglytuff</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
