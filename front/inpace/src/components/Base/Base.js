import React from 'react';
import './Base.css';
import PhotoHeader from './photo-base.jpg';


class PageBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <img className="photo-header" src={PhotoHeader} alt="header" />
        <div className="container">
          <h1 className="container__title">Les Services de Base</h1>
          <p className="container__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          <div className="div-btn">
            <button className="container__btn" type="button"> Enlèvement, transport et corbillard </button>
            <button className="container__btn" type="button"> Soin et mise en bière du defunt </button>
            <button className="container__btn" type="button"> Démarches administratives </button>
          </div>
          <p className="container__text container__text__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <button className="container__btn container__btn-precedent" type="button">Précédent</button>
          <button className="container__btn container__btn-suivant" type="button">Suivant</button>
        </div>
      </React.Fragment>
    );
  }
}

export default PageBase;
