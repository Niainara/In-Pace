// tslint:disable-next-line:max-line-length
import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import MyForm2 from '../../components/form2-accueil/index';
import Arrow from '../../assets/arrow.svg';


class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="index">
        <div className="mainpage">
          <div className="mainpage__black">
            <div className="mainpage__card">
              <img src={Logo} alt="logo" height="50px" width="200px" className="mainpage__card__logo" />
              <div className="mainpage__border__button">
                <div className="mainpage__card__text">
                  <p>CONSULTEZ LES POMPES FUNEBRES DISPONIBLES ET LES TARIFS APPLICABLES</p>
                </div>
                <a className="mainpage__button" href="#nextpage">
                  <img className="down__arrow" src={Arrow} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="nextpage" className="nextpage">
          {/*
          <div className="nextpage__sentence">
            <p className="nextpage__sentence__text">FAITES NOUS CONFIANCE ET COMMENCEZ A CHERCHER LES SERVICES QUI VOUS CONVIENNENT</p>
            <p className="nextpage__sentence__text">AFIN DE PREPARER LES FUNERAILLES DANS LES MEILLEURES CONDITIONS</p>
          </div>
          */}
          <div className="nextpage__form">
            <MyForm2 />
          </div>
          <div className="nextpage__footer">
            <NavLink to="/utilisation">CONDITIONS D&apos;UTILISATION</NavLink>
            <NavLink to="/confidentialité">POLITIQUES DE CONFIDENTIALITE</NavLink>
            <NavLink to="/cookies">POLITIQUE D&apos;UTILISATION DES COOKIES</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Accueil;
