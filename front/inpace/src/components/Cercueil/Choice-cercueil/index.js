import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

const mapStateToProps = state => ({
	cercueil: state.cercueilReducer
});

const mapDispatchToProps = dispatch =>> ({

});

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
          {showingSobre ? <p className="container__text__cercueil container__text__description__cercueil">Tout cercueil est obligatoirement muni d`une cuvette étanche biodégradable, de 4 poignées et d`une plaque portant les nom et prénom du défunt, ainsi que ses années de naissance et de décès. Cette gamme qui utilise généralement du pin ou du peuplier est la moins coûteuse et ne comprend aucune option.</p> : null
        }
          {showingStandard ? (
            <p className="container__text__cercueil container__text__description__cercueil">
          Les cercueils standards ont un bon rapport qualité prix. Ils sont réalisés dans
          une matière plus noble et plus solide que les cercueils économiques (par exemple
          en chêne/ajou) et peuvent davantage être choisis en fonction des goûts du défunt.
            </p>
          ) : null
        }
          {showingLuxe ? <p className="container__text__cercueil container__text__description__cercueil">Les cercueils les plus luxueux ont souvent une forme de coffre. Cette gamme concerne des cercueils souvent personnalisables (grâce à des rajouts décoratifs) qui peuvent se décliner dans les matières les plus prestigieuses (par exemple en acajou). Il est entendu que la personnalisation concerne des ornements classiques et ne prend pas en compte des ornements plus inhabituels ou exclusifs (dont le prix est déterminé au cas par cas).</p> : null
        }
          <div className="div-btn__cercueil">
            <NavLink to="/choix-des-obseques" className="container__btn__cercueil container__btn-precedent__cercueil" type="button">Précédent</NavLink>
            <NavLink to="/choix-des-options" className="container__btn__cercueil container__btn-suivant__cercueil" type="button">Suivant</NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChoiceCercueil;
