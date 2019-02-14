import React from 'react';
import './index.css';


class HeaderObs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container__header__obs">
        <div className="header__obs" />
        <ul className="header__obs__progress">
          <li className="header__obs__progress__item" />
          <li className="header__obs__progress__item" />
          <li className="header__obs__progress__item header__obs__progress__item__inactive" />
          <li className="header__obs__progress__item header__obs__progress__item__inactive" />
        </ul>
        <h1 className="header__title__obs">Les Services de Base</h1>
        <p className="header__description__obs">En Belgique, l’organisation de funérailles implique nécessairement un choix à effectuer entre la crémation ou l’inhumation du défunt. Des explications plus détaillées concernant la crémation et l’inhumation peuvent être consultées en cliquant sur le champ correspondant.</p>
      </div>
    );
  }
}
export default HeaderObs;
