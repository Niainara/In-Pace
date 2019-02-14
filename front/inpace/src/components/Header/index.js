import React from 'react';
import './index.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container__header">
        <div className="header" />
        <ul className="header__base__progress">
          <li className="header__base__progress__item" />
          <li className="header__base__progress__item header__base__progress__item__inactive" />
          <li className="header__base__progress__item header__base__progress__item__inactive" />
          <li className="header__base__progress__item header__base__progress__item__inactive" />
        </ul>
        <h1 className="header__title">Les Services de Base</h1>
        <p className="header__description">En Belgique, l’organisation de funérailles implique nécessairement la prestation des services de base repris ci-dessous. Des explications plus détaillées concernant ces services peuvent être consultées en cliquant sur le champ correspondant. </p>
      </div>
    );
  }
}
export default Header;
