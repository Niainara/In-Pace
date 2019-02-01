import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="index">
        <NavLink to="/cookies"> Cookies</NavLink>
        <NavLink to="/confidentialite">Confidentialité</NavLink>
        <NavLink to="/utilisation">Conditions d`utilisation</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    );
  }
}

export default Accueil;
