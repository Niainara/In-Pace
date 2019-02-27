import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import IconAvatar from './flower.jpg';
import SimpleMap from '../map/index';

const array = [{ key: 1, nom: 'Association pour l`Inhumation et la Crémation' }, { key: 2, nom: 'Association pour l`Inhumation et la Crémation' }, { key: 3, nom: 'Association pour l`Inhumation et la Crémation' }, { key: 4, nom: 'Association pour l`Inhumation et la Crémation' }];

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const listResults = array.map(elem => (
      <li key={elem.key} className="container__results__box">
        <div className="container__results__avatar">
          <img src={IconAvatar} alt="ici" width="120" heigth="120" />
        </div>
        <div className="container__results__aka">
          <div className="container__results__name">
            <p className="container__results__nom">{elem.nom}</p>
            <span className="container__results__adresse"> Rue Van Artevelde 140, 1000 Bruxelles</span>
            <div className="container__results__stars">
              <span className="fa fa-circle checked" />
              <span className="fa fa-circle checked" />
              <span className="fa fa-circle checked" />
              <span className="fa fa-circle checked" />
              <span className="fa fa-circle" />
            </div>
          </div>
          <div className="container__results__price">
            <p className="container__results__prix">1200€</p>
            <NavLink to="/detail" className="container__bouton__results">
              <span>DETAILS</span>
            </NavLink>
          </div>
        </div>
      </li>
    ));
    return (
      <div className="container__results__main">
        <div className="container__results__boxes">
          <h1 className="container__results__title">Resultats</h1>
          <ul>
            {listResults}
          </ul>
        </div>
        <div className="container__results__map">
          <h2 className="container__results__map__title">Carte</h2>
          <SimpleMap />
        </div>
      </div>
    );
  }
}

export default Results;
