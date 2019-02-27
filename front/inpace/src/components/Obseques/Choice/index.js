import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  obseques: state.obsequesReducer,
});

const mapDispatchToProps = dispatch => ({
  onCremation: () => dispatch({ type: 'CREMATION' }),
  onInhumation: () => dispatch({ type: 'INHUMATION' }),
});

class ChoiceObs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingCremation: true,
      showingInhumation: false,
    };
    this.handleCremation = this.handleCremation.bind(this);
    this.handleInhumation = this.handleInhumation.bind(this);
  }

  handleCremation() {
    const { showingCremation } = this.state;
    const { showingInhumation } = this.state;
    this.setState({ showingCremation: !showingCremation, showingInhumation: !showingInhumation });
    this.props.onCremation();
  }

  handleInhumation() {
    const { showingCremation } = this.state;
    const { showingInhumation } = this.state;
    this.setState({ showingInhumation: !showingInhumation, showingCremation: !showingCremation });
    this.props.onInhumation();
  }

  render() {
    const { showingCremation } = this.state;
    const { showingInhumation } = this.state;
    return (
      <React.Fragment>
        <div className="container__obs">
          <div className="div-btn__obs">
            <button className={showingCremation ? 'container__btn__obs active' : 'container__btn__obs'} type="button" onClick={this.handleCremation}> Cremation </button>
            <button className={showingInhumation ? 'container__btn__obs active' : 'container__btn__obs'} type="button" onClick={this.handleInhumation}> Inhumation </button>
          </div>
          {showingCremation ? (
            <p className="container__text__obs container__text__description__obs">
        La crémation est l`action de brûler le corps de la personne disparue.
        Ce processus se déroule dans un crématorium. Il existe 18 crématoriums en Belgique
        qui appliquent des tarifs relativement similaires. Le prix d’une crémation est de
        ± 600 EUR et inclut généralement la mise à disposition pendant 20-30 minutes d’une
        salle de recueillement au sein du crématorium ainsi que d’une urne basique pour
        y recueillir les cendres.
        Outre le prix de la crémation, il faut également compter les frais de personnel et
        de transport (corbillard) de l’entrepreneur de pompes funèbres. Ces frais de personnel
        et de transport sont calculés sur base d’une mise à disposition de minimum 2 personnes
        pour une durée (standard) de 3h. En cas de dépassement de ce délai de 3h (par exemple
        en raison de distances plus élevées ou d’une cérémonie plus longue), un supplément
        peut être appliqué par l’entrepreneur de pompes funèbres selon un tarif horaire
        qui sera précisé au préalable.
        Vous restez évidemment libres d’organiser une cérémonie dans un autre lieu
        et/ou de choisir une autre urne auprès de votre entrepreneur de pompes funèbres.
        A la suite de la crémation, les cendres du défunt peuvent soit être dispersées au
        crématorium ou au cimetière soit être conservés au crématorium (columbarium ou stèle)
        ou au cimetière (concession, columbarium ou cavurne). Les tarifs fixes appliqués les
        crématoriums ou communes pour la dispersion des cendres ou la conservation de l’urne
        ne sont pas inclus dans le prix. Il convient de se renseigner auprès du crématorium ou
        de la commune concernée ou de l’entrepreneur de pompes funèbres pour obtenir les différents
        prix applicables. Des prix indicatifs vous seront néanmoins indiqués lors du récapitulatif.

            </p>
          ) : null
        }
          {showingInhumation ? (
            <p className="container__text__obs container__text__description__obs">
          L`inhumation (ou enterrement classique) consiste à mettre en terre le défunt
          dans un cimetière. Le défunt peut être inhumé soit en terre commune soit en
          concession privative (pleine terre ou caveau).
          L’inhumation implique des frais de personnel de l’entrepreneur de pompes funèbres.
          Ces frais de personnel sont calculés sur base d’une mise à disposition de minimum
          2 personnes pour une durée (standard) de 1h.
          Les tarifs fixes appliqués les communes pour l’inhumation en terre commune ou en
          concession privative ne sont pas inclus dans le prix. Il convient de se renseigner
          auprès de la commune concernée ou de l’entrepreneur de pompes funèbres pour obtenir
          les différents prix applicables. Des prix indicatifs vous seront néanmoins indiqués
          lors du récapitulatif.
            </p>
          ) : null
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChoiceObs);
