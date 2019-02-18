import React from 'react';
import { connect } from 'react-redux';
import Card from '../card-results/index';

const Results = (props) => (
	<div>
		{{props.state}.map(result => (
			<Card />
		)
		)}
	</div>
);

function mapStateToProps(state){
	return {
		nombreDePompesFunebres: state,
	}
}

export default connect(mapStateToProps)(Results);
