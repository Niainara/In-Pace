/* eslint-disable */
import React from 'react';
import './toolbar.css';
import Inpace from './inpace.png';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="nav">
        <img className="nav__logo" src={Inpace} alt="IN PACE" />
        <div className="nav__btn">
          <label className="nav__btn__burger" for="nav-check" htmlFor="nav-check">
            <span className="nav__btn__line" />
            <span className="nav__btn__line" />
            <span className="nav__btn__line" />
          </label>
        </div>
        <input type="checkbox" id="nav-check" />
        <div className="nav__links">
          <a className="nav__links__item" href="google.com" target="_blank">Accueil</a>
          <a className="nav__links__item" href="google.com" target="_blank">Accueil</a>
          <a className="nav__links__item" href="google.com" target="_blank">Accueil</a>
          <a className="nav__links__item" href="google.com" target="_blank">Accueil</a>
        </div>
      </div>
    );
  }
}
export default Toolbar;
