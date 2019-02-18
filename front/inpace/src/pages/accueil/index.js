import React, { Component } from 'react';
import './index.css';
import Logo from '../../assets/logo.png';
import MyForm2 from '../../components/form2-accueil/index';
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
          <div className="mainpage__card">
            <img src={Logo} alt="logo" height="50px" width="200px" className="mainpage__card__logo" />
            <div className="mainpage__card__text">
              <p>CONSULTEZ LES POMPES FUNEBRES DISPONIBLES EN TOUTE CONFIANCE ET LES TARIFS APPLICABLES</p>
            </div>
            <div className="mainpage__button">
              <a href="#nextpage"> NEXT </a>
            </div>
          </div>
        </div>
        <div id="nextpage" className="nextpage">
          <div className="nextpage__sentence">
            <p>FAITES NOUS CONFIANCE ET COMMENCEZ A CHERCHER LES SERVICES QUI VOUS CONVIENNENT</p>
            <p>AFIN DE PREPARER LES FUNERAILLES DANS LES MEILLEURES CONDITIONS</p>
          </div>
          <div className="nextpage__form">
            <MyForm2 />
          </div>
          <div className="nextpage__footer">
            <div>CONDITIONS D&apos;UTILISATION</div>
            <div>POLITIQUES DE CONFIDENTIALITE</div>
            <div>POLITIQUE D&apos;UTILISATION DES COOKIES</div>
            <div>CONTACT</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accueil;
