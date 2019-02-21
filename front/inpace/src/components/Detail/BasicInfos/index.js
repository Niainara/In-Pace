import React from 'react';
import './index.css';

class DetailHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container__basic-infos">
        <div className="container__basic-infos__header">
          <h1 className="container__basic-infos__title">Titre des Pompes Funebres</h1>
        </div>
        <div className="container__basic-infos__contact">
          <div className="container__basic-infos__contact__infos">
            <h2 className="container__basic-infos__contact__infos__title">Contact</h2>
            <p className="container__basic-infos__contact__infos__items">Rue du Paray 82-86 
              <br />4100 Seraing
            </p>
            <p className="container__basic-infos__contact__infos__items">01/234/56.78</p>
          </div>
          <div className="container__basic-infos__contact__map" />
        </div>
      </div>
    );
  }
}
export default DetailHeader;
