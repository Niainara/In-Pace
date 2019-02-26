import React from 'react';
import './index.css';
import SimpleMap from '../../map/index';
import RecapDevis from '../../Recap/index';
import Avis from '../../avis-icons/index';

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
              <br />
                4100 Seraing
            </p>
            <p className="container__basic-infos__contact__infos__items">01/234/56.78</p>
          </div>
          <div>
            <SimpleMap />
          </div>
        </div>
        <div className="container__basic-infos__description">
          <div className="container__basic-infos__description__content">
            <h2 className="container__basic-infos__description__titre">Qui sommes nous?</h2>
            <p className="container__basic-infos__description__texte">
              Nunc congue metus a tellus pulvinar semper. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Aenean eget sodales enim.
              Duis vitae elit gravida, pretium ipsum a, luctus leo. Ut ut nibh
              nunc. Duis a sapien pellentesque, porttitor magna in, convallis sapien.
              Proin ac lorem ipsum. Vestibulum blandit luctus gravida.
              Nunc congue metus a tellus pulvinar semper. Interdum et malesuada fames
              ac ante ipsum primis in faucibus. Aenean eget sodales enim. Duis vitae
              elit gravida, pretium ipsum a, luctus leo. Ut ut nibh nunc. Duis a sapien
              pellentesque, porttitor magna in, convallis sapien. Proin ac lorem ipsum.
              Vestibulum blandit luctus gravida.
            </p>
          </div>
        </div>
        <RecapDevis />
        <div className="container__basic-infos__avis">
          <Avis />
        </div>
      </div>
    );
  }
}
export default DetailHeader;
