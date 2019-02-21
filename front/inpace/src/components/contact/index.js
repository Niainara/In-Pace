import React, { Component } from 'react';
import './index.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="container">
        <h1 id="title">Contact</h1>
        <p className="text">Adresse postale : IN PACE, Rue Henri Stacquet 12, 1030 Schaerbeek</p>
        <p className="text">Email : info@in-pace.be</p>
      </div>
    );
  }
}

export default Contact;
