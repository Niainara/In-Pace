import React, { Component } from 'react';
import './index.css';
import Logo from '../../assets/logo.png';
import MyForm from '../../components/form-accueil/index';

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
							<p>CONSULTEZ LES POMPES FUNEBRES DISPONIBLES EN TOUTE CONFIANCE</p>
						</div>
					</div>
				</div>
				<div className="nextpage">
					<div className="nextpage__sentence">
						<p>FAITES NOUS CONFIANCE ET COMMENCEZ A CHERCHER LES SERVICES QUI VOUS CONVIENNENT</p>
						<p>AFIN DE PREPARER LES FUNERAILLES DANS LES MEILLEURES CONDITIONS</p>
					</div>
					<div className="nextpage__form">
						<div className="nextpage__form__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu fermentum risus. Suspendisse enim urna, tempor non augue vel, suscipit vestibulum felis. Quisque bibendum odio est, quis hendrerit lorem finibus et. Nulla ac bibendum nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sed ipsum in ipsum tristique fringilla. Pellentesque lacinia, purus in eleifend fermentum, erat metus hendrerit justo, vitae eleifend dui lacus nec erat. Phasellus ut scelerisque nisi. Nullam blandit quam eu mauris aliquam, ac ullamcorper metus dictum. Morbi tincidunt sed risus ut ornare.

Aenean ac urna eget sem eleifend suscipit eget ac nisi. Sed dictum libero dui, et gravida nisl vestibulum ut. Duis quis suscipit risus. Donec sit amet dui sit amet dolor bibendum iaculis. Nunc at enim venenatis, varius mauris sit amet, efficitur erat. Aliquam a aliquet velit. Nulla facilisi. Mauris vitae nunc ut est dictum lacinia sit amet vitae enim.
						</div>
						<div className="nextpage__form__form">
							<MyForm />
						</div>
					</div>
					<div className="nextpage__footer">
						<div>CONDITIONS D'UTILISATION</div>
						<div>POLITIQUES DE CONFIDENTIALITE</div>
						<div>POLITIQUE D'UTILISATION DES COOKIES</div>
						<div>CONTACT</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Accueil;
