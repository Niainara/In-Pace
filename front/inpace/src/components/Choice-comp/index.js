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
            <button className='container__btn__base' type="button" onClick={() => this.setState({ showingOne: !showingOne, showingTwo: false, showingThree: false })}> Enlèvement, transport et corbillard </button>
            <button className='container__btn__base' type="button" onClick={() => this.setState({ showingTwo: !showingTwo, showingOne: false, showingThree: false })}> Soin et mise en bière du defunt </button>
            <button className='container__btn__base' type="button" onClick={() => this.setState({ showingThree: !showingThree, showingTwo: false, showingOne: false })}> Démarches administratives </button>
          </div>
          {showingOne ? (
            <p className="container__text__base container__text__description__base">
            Par prise en charge et transfert du défunt, on entend son enlèvement à l’hôpital
            (ou au domicile, funérarium ou autre), son transport vers le lieu de mise en bière
            et son transfert vers le lieu de repos.
            Ces services impliquent notamment des frais de personnel (porteurs et chauffeur)
            mais également de transport (corbillard).
            Les frais de transport sont calculés sur base d’une mise à disposition de 2 personnes
            pour une durée (standard) de 3h. En cas de dépassement de ce délai de 3h (par exemple
            en raison de distances plus élevées), un supplément peut être appliqué
            par l’entrepreneur de pompes funèbres selon un tarif horaire qui sera
            précisé au préalable.
            </p>
          ) : null
        }
          {showingTwo ? (
            <p className="container__text__base container__text__description__base">
          La mise en bière du défunt consiste à placer le défunt dans un cercueil,
          le mot bière désignant le cercueil.
          En plus de la simple toilette du défunt à l’aide produits d’hygiène,
          l’entrepreneur de pompes funèbres fournit généralement des soins de
          présentation incluant par exemple le maquillage du défunt.
          Si les soins de présentation ne sont pas strictement obligatoires,
          ils sont fortement recommandés (et communément appliqués par les entrepreneurs
          de pompes funèbres) pour des raisons de dignité.
            </p>
          ) : null
        }
          {showingThree ? <p className="container__text__base container__text__description__base">Les démarches administratives comprennent les formalités à effectuer auprès de la maison communale pour la délivrance et l’obtention des documents administratifs obligatoires (actes de décès, autorisation de transport, etc.).</p> : null
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
