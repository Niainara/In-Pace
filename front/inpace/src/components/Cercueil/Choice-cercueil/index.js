import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class ChoiceCercueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingSobre: false,
      showingStandard: false,
      showingLuxe: false,
    };
  }

  render() {
    const { showingSobre } = this.state;
    const { showingStandard } = this.state;
    const { showingLuxe } = this.state;
    return (
      <React.Fragment>
        <div className="container__cercueil">
          <div className="div-btn__cercueil">
            <button className={showingSobre ? 'container__btn__cercueil active' : 'container__btn__cercueil'} type="button" onClick={() => this.setState({ showingSobre: !showingSobre, showingStandard: false, showingLuxe: false })}> Sobre </button>
            <button className={showingStandard ? 'container__btn__cercueil active' : 'container__btn__cercueil'} type="button" onClick={() => this.setState({ showingStandard: !showingStandard, showingSobre: false, showingLuxe: false })}> Standard </button>
            <button className={showingLuxe ? 'container__btn__cercueil active' : 'container__btn__cercueil'} type="button" onClick={() => this.setState({ showingLuxe: !showingLuxe, showingSobre: false, showingStandard: false })}> Luxe </button>
          </div>
          {showingSobre ? <p className="container__text__cercueil container__text__description__cercueil">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p> : null
        }
          {showingStandard ? <p className="container__text__cercueil container__text__description__cercueil">coucou</p> : null
        }
          {showingLuxe ? <p className="container__text__cercueil container__text__description__cercueil">coucou et recoucou</p> : null
        }
          <div className="div-btn__cercueil">
            <NavLink to="/choix-des-obseques" className="container__btn__cercueil container__btn-precedent__cercueil" type="button">Précédent</NavLink>
            <NavLink to="/choix-de-cercueil" className="container__btn__cercueil container__btn-suivant__cercueil" type="button">Suivant</NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChoiceCercueil;
