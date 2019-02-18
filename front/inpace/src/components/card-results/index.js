import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Card = (props) => (
	<div>
		<img src={props.image} width="300px" height="275px" alt="Pompe funebre" />
		<h2>{props.nomPompeFunebre}</h2>
		<p>{props.adressePompeFunebre}</p>
		<Link to="/infospompesfunebres">Plus d&apos;infos</Link>
		<h1>{props.prixPompeFunebre} euros</h1>
		<p>Demande de contact(fonction qui envoie un message a la pompefunebre)</p>
	</div>
);

function mapStateToProps(state){
	return {
		infosPompesFunebres: state,
	}
}

export default connect(mapStateToProps)(Card);
