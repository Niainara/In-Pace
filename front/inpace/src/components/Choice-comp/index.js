import React from 'react';

class ChoiceObs extends React.Component {
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
        <div className="container">
          <div className="div-btn">
            <button className={showingOne ? 'container__btn active' : 'container__btn'} type="button" onClick={() => this.setState({ showingOne: !showingOne, showingTwo: false, showingThree: false })}> Enlèvement, transport et corbillard </button>
            <button className={showingTwo ? 'container__btn active' : 'container__btn'} type="button" onClick={() => this.setState({ showingTwo: !showingTwo, showingOne: false, showingThree: false })}> Soin et mise en bière du defunt </button>
            <button className={showingThree ? 'container__btn active' : 'container__btn'} type="button" onClick={() => this.setState({ showingThree: !showingThree, showingTwo: false, showingOne: false })}> Démarches administratives </button>
          </div>
          {showingOne ? <p className="container__text container__text__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p> : null
        }
          {showingTwo ? <p className="container__text container__text__description">coucou</p> : null
        }
          {showingThree ? <p className="container__text container__text__description">coucou toi</p> : null
        }
          <div className="div-btn">
            <button className="container__btn container__btn-precedent" type="button">Précédent</button>
            <button className="container__btn container__btn-suivant" type="button">Suivant</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChoiceObs;
