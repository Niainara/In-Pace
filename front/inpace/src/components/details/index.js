import React, { Component } from 'react';
import './index.css';
import SimpleMap from '../map/index';
import IconMap from './map.png';
import IconPhone from './phone.svg';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container__details__main">
        <h1 className="container__details__title">Détails</h1>
        <h2 className="container__details__subtitle"> Contact </h2>
        <div className="container__details__contact">
          <div className="container__details__icons">
            <div className="container__details__icons__map">
              <img className="icon_map" src={IconMap} alt="icon_map" style={{ height: '30px', width: '30px' }} />
              <p>Rue Van Artevelde 140, 1000 Bruxelles</p>
            </div>
            <div className="container__details__icons__phone">
              <img className="icon_phone" src={IconPhone} alt="icon_phone" style={{ height: '30px', width: '30px' }} />
              <p>02 502 14 24</p>
            </div>
          </div>
          <SimpleMap className="container__details__map" />
        </div>
        <div>
          <h2 className="container__details__subtitle">Qui sommes nous?</h2>
          <p className="container__details__text">
            Nunc congue metus a tellus pulvinar semper. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Aenean eget sodales enim.
            Duis vitae elit gravida, pretium ipsum a, luctus leo. Ut ut nibh
            nunc. Duis a sapien pellentesque, porttitor magna in, convallis sapien.
            Proin ac lorem ipsum. Vestibulum blandit luctus gravida.
            Nunc congue metus a tellus pulvinar semper. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Aenean eget sodales enim. Duis vitae
            elit gravida, pretium ipsum a, luctus leo. Ut ut nibh nunc. Duis a sapien
            pellentesque, porttitor magna in, convallis sapien. Proin ac lorem ipsum.
            Vestibulum blandit luctus gravida.
          </p>
        </div>
        <h2 className="container__details__subtitle">Récapitulatif</h2>
      </div>
    );
  }
}

export default Details;
