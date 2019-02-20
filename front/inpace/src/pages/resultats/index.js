import React, { Component } from 'react';
import Results from '../../components/results/index';

class Resultats extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
		this.prix = this.prix.bind(this);
	}

	// Fonction de tri en fonction du prix (plus petit au plus grand)
	prix() {
		{props.prix}.sort	(function	 (a, b) {
			return a.value - b.value;
		}
	}

	render() {
		return (
			<div className="resultats">
				<div> NAVBAR </div>
				<div className="resultats__header"><p>NOUS AVONS TROUVE {props.nombre} RESULTATS QUI POURRAIENT VOUS CORRESPONDRE</p>
					<div className="resultats__header__tri">
						<p>TRIER PAR</p>
						<select>
							<option value="pertinence">pertinence</option>
							<option value="prix" onClick={this.prix}>prix</prix>
						</select>
					</div>
				</div>
				<div className="resultats__resultats">
					<Results />
				</div>
			</div>
		);
	}
}
