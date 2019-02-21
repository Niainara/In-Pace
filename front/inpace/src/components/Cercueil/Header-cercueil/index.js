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
        <p className="header__description__cercueil">Que l’on opte pour une crémation ou une inhumation, il est obligatoire de choisir un cercueil dans lequel reposera le défunt. Les entrepreneurs de pompes funèbres proposent généralement trois gammes de cercueil : sobre, standard et luxe. Des explications détaillées relatives à chacune de ces gammes peuvent être consultées en cliquant que le champ correspondant.</p>
      </div>
    );
  }
}
export default HeaderCercueil;
