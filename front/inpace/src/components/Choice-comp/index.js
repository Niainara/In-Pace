import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class Choice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingOne: false,
      showingTwo: false,
      showingThree: false,
    };
  }

  render() {
    const { showingOne } = this.state;
    const { showingTwo } = this.state;
    const { showingThree } = this.state;
    return (
      <React.Fragment>
        <div className="container__base">
          <div className="div-btn__base">
            <button className={showingOne ? 'container__btn__base active' : 'container__btn__base'} type="button" onClick={() => this.setState({ showingOne: !showingOne, showingTwo: false, showingThree: false })}> Enlèvement, transport et corbillard </button>
            <button className={showingTwo ? 'container__btn__base active' : 'container__btn__base'} type="button" onClick={() => this.setState({ showingTwo: !showingTwo, showingOne: false, showingThree: false })}> Soin et mise en bière du defunt </button>
            <button className={showingThree ? 'container__btn__base active' : 'container__btn__base'} type="button" onClick={() => this.setState({ showingThree: !showingThree, showingTwo: false, showingOne: false })}> Démarches administratives </button>
          </div>
          {showingOne ? <p className="container__text__base container__text__description__base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p> : null
        }
          {showingTwo ? <p className="container__text__base container__text__description__base">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p> : null
        }
          {showingThree ? <p className="container__text__base container__text__description__base">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio</p> : null
        }
          <div className="div-btn__base">
            <NavLink to="/accueil" className="container__btn__base container__btn-precedent__base" type="button">Précédent</NavLink>
            <NavLink to="/choix-des-obseques" className="container__btn__base container__btn-suivant__base" type="button">Suivant</NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Choice;
