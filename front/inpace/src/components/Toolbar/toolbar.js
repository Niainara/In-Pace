import React from 'react';
import './toolbar.css';
import Inpace from './inpace.png';

const Toolbar = () => (
  <header className="toolbar">
    <img className="toolbar__logo" src={Inpace} alt="IN PACE" />
    <ul className="toolbar__nav">
      <li className="toolbar__nav__item">
        <p>accueil</p>
      </li>
      <li className="toolbar__nav__item">
        <p>accueil</p>
      </li>
      <li className="toolbar__nav__item">
        <p>accueil</p>
      </li>
      <li className="toolbar__nav__item">
        <p>accueil</p>
      </li>
    </ul>
  </header>
);
export default Toolbar;
