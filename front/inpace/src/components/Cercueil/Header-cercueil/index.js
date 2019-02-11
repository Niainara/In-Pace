import React from 'react';
import './index.css';


class HeaderCercueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container__header__cercueil">
        <div className="header__cercueil" />
        <ul className="header__cercueil__progress">
          <li className="header__cercueil__progress__item" />
          <li className="header__cercueil__progress__item" />
          <li className="header__cercueil__progress__item" />
          <li className="header__cercueil__progress__item header__cercueil__progress__item__inactive" />
        </ul>
        <h1 className="header__title__cercueil">Choix du Cercueil</h1>
        <p className="header__description__cercueil">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      </div>
    );
  }
}
export default HeaderCercueil;
