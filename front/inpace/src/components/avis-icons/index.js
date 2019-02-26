import React, { Component } from 'react';
import './index.css';
import IconShop from './shop.png';
import IconPermanence from './24h.png';
import IconRepas from './repas.png';
import IconCafe from './cafe.png';
import IconMicro from './micro.png';
import IconReception from './assis.png';

class Avis extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container__main">
        <div className="container__avis__main">
          <h2 className="container__title__icons">Avis</h2>
          <div className="container__avis__text">
            <div className="container__avis__text__circles">
              <p className="comments__date">Il y a 3 jours</p>
              <div className="container__avis__circles">
                <span className="fa fa-circle checked" />
                <span className="fa fa-circle checked" />
                <span className="fa fa-circle checked" />
                <span className="fa fa-circle " />
                <span className="fa fa-circle" />
              </div>
            </div>
            <p className="comments__text">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Fusce vel dolor risus.
            Aliquam bibendum lorem eu dui finibus pretium.
            In eu dolor consequat, sollicitudin diam id, ultricies nisl.
            </p>
          </div>
          <div className="container__avis__text">
            <p className="comments__date">Il y a 5 jours</p>
            <span className="fa fa-circle checked" />
            <span className="fa fa-circle checked" />
            <span className="fa fa-circle checked" />
            <span className="fa fa-circle checked" />
            <span className="fa fa-circle" />
            <p className="comments__text">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Fusce vel dolor risus.
            Aliquam bibendum lorem eu dui finibus pretium.
            In eu dolor consequat, sollicitudin diam id, ultricies nisl.
            </p>
          </div>
          <div className="comments-container" />
        </div>
        <div className="container__icons__main">
          <h2 className="container__title__icons">Infos pratiques</h2>
          <div className="container__text__principal">
            <div className="container__text__main">
              <p className="container__text__permanence">Permanence</p>
              <img className="icon_permanence" src={IconPermanence} alt="icon_permanence" style={{ height: '40px', width: '40px' }} />
            </div>
            <div className="container__text__main">
              <p className="container__text__micro">Cérémonie</p>
              <img className="icon_micro" src={IconMicro} alt="icon_micro" style={{ height: '40px', width: '40px' }} />
            </div>
            <div className="container__text__main">
              <p className="container__text__reception">Réception</p>
              <img className="icon_reception" src={IconReception} alt="icon_reception" style={{ height: '40px', width: '40px' }} />
            </div>
            <div className="container__text__main">
              <p className="container__text__restauration">Restauration</p>
              <img className="icon_repas" src={IconRepas} alt="icon_repas" style={{ height: '40px', width: '40px' }} />
            </div>
            <div className="container__text__main">
              <p className="container__text__cafe">Café</p>
              <img className="icon_cafe" src={IconCafe} alt="icon_cafe" style={{ height: '40px', width: '40px' }} />
            </div>
            <div className="container__text__main">
              <p className="container__text__magasin">Magasin</p>
              <img className="icon_shop" src={IconShop} alt="icon_shop" style={{ height: '40px', width: '40px' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Avis;
