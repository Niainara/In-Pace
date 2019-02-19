import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import MyForm from '../../components/form-accueil/index';
import MyForm2 from '../../components/form2-accueil/index';
import Arrow from '../../assets/arrow.svg';


class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = { hasClicked: false };
    this.handleContinue = this.handleContinue.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }

  handleContinue() {
    this.setState({ hasClicked: true });
  }

  handleReturn() {
    this.setState({ hasClicked: false });
    this.state = {
    };
  }

  render() {
    return (
      <div className="index">
        <div className="mainpage">
          <div className="mainpage__card">
            <img src={Logo} alt="logo" height="50px" width="200px" className="mainpage__card__logo" />
            <div className="mainpage__border__button">
              <div className="mainpage__card__text">
                <p>CONSULTEZ LES POMPES FUNEBRES DISPONIBLES ET LES TARIFS APPLICABLES</p>
              </div>
              <a className="mainpage__button" href="#nextpage">
                <img src={Arrow} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div id="nextpage" className="nextpage">
          <div className="nextpage__sentence">
            <p>FAITES NOUS CONFIANCE ET COMMENCEZ A CHERCHER LES SERVICES QUI VOUS CONVIENNENT</p>
            <p>AFIN DE PREPARER LES FUNERAILLES DANS LES MEILLEURES CONDITIONS</p>
          </div>
          <div className="nextpage__form">
            {(!this.state.hasClicked)
              ? <MyForm handleContinue={this.handleContinue} />
              : <MyForm2 handleReturn={this.handleReturn} />}
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
