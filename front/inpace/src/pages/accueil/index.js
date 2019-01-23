import React, { Component } from 'react';
import './index.css';
import Logo from '../../assets/logo.png';
import Background from '../../assets/Fleur.jpg';

class Accueil extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="index">
				<div className="mainpage">
					<div className="mainpage__card">
						<img src={Logo} alt="logo" height="50px" width="200px" className="mainpage__card__logo" />
						<div className="mainpage__card__text">
							CONSULTEZ LES POMPES FUNEBRES DISPONIBLES EN TOUTE CONFIANCE
						</div>
					</div>
				</div>
				<div className="nextpage">
					<div className="nextpage__text">
						FAITES NOUS CONFIANCE ET COMMENCEZ A CHERCHER LES SERVICES QUI VOUS CONVIENNENT AFIN DE PREPARER LES FUNERAILLES DANS LES MEILLEURES CONDITIONS
					</div>
					<div className="nextpage__form">
						form
					</div>
					<div className="nextpage__footer">
						footer
					</div>
				</div>
			</div>
		);
	}
}

export default Accueil;
