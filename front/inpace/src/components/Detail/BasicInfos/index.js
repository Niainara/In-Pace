import React from 'react';
import './index.css';
import SimpleMap from '../../map/index';
import RecapDevis from '../../Recap/index';
import Avis from '../../avis-icons/index';
import { withRouter } from 'react-router-dom';

class DetailHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			details: [{}],
    };
  }

  componentDidMount(){
    window.scrollTo(0, 0);
		fetch(`/api/detail/${this.props.match.params.id}`)
			.then(response => response.json())
			.then(details => {this.setState({ details })});
  }

  render() {
		console.log("details", this.state.details);
		console.log("details[0]", this.state.details[0]['adresse_p']);
    return (
      <div className="container__basic-infos">
        <div className="container__basic-infos__header">
          <h1 className="container__basic-infos__title">{this.state.details[0]['pompe_p']}</h1>
        </div>
        <div className="container__basic-infos__contact">
          <div className="container__basic-infos__contact__infos">
            <h2 className="container__basic-infos__contact__infos__title">Contact</h2>
						<p className="container__basic-infos__contact__infos__items">{this.state.details[0]['prenom_p']} {this.state.details[0]['nom_p']}</p>
            <p className="container__basic-infos__contact__infos__items">{this.state.details[0]['adresse_p']}
            </p>
						<p className="container__basic-infos__contact__infos__items">{this.state.details[0]['mail_p']}</p>
            <p className="container__basic-infos__contact__infos__items">{this.state.details[0]['numero_p']}</p>
          </div>
          <div>
            <SimpleMap />
          </div>
        </div>
        <div className="container__basic-infos__description">
          <div className="container__basic-infos__description__content">
            <h2 className="container__basic-infos__description__titre">Qui sommes nous?</h2>
            <p className="container__basic-infos__description__texte">{this.state.details[0]['mot_p']}
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
export default withRouter(DetailHeader);
