import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class ChoiceObs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingCremation: false,
      showingInhumation: false,
    };
  }

  render() {
    const { showingCremation } = this.state;
    const { showingInhumation } = this.state;
    return (
      <React.Fragment>
        <div className="container__obs">
          <div className="div-btn__obs">
            <button className={showingCremation ? 'container__btn__obs active' : 'container__btn__obs'} type="button" onClick={() => this.setState({ showingCremation: !showingCremation, showingInhumation: false })}> Cremation </button>
            <button className={showingInhumation ? 'container__btn__obs active' : 'container__btn__obs'} type="button" onClick={() => this.setState({ showingInhumation: !showingInhumation, showingCremation: false })}> Inhumation </button>
          </div>
          {showingCremation ? <p className="container__text__obs container__text__description__obs">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p> : null
        }
          {showingInhumation ? <p className="container__text__obs container__text__description__obs">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio</p> : null
        }
          <div className="div-btn__obs">
            <NavLink to="/choix-de-base" className="container__btn__obs container__btn-precedent__obs" type="button">Précédent</NavLink>
            <NavLink to="/choix-de-cercueil" className="container__btn__obs container__btn-suivant__obs" type="button">Suivant</NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChoiceObs;
