import React from 'react';
import '../../pages/accueil/index.css';
import { reduxForm, Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {
	DatePicker,
	SelectField,
} from 'redux-form-material-ui';
import { TextField } from 'material-ui';

const validate = (values) => {
	const errors = {};
	if (!values.nomDefunt) {
		errors.nomDefunt = 'Requis';
	}
	if (!values.prenomDefunt) {
		errors.prenomDefunt = 'Requis';
	}
	if (!values.lieuEnterrement) {
		errors.lieuEnterrement = 'Requis';
	}
	return errors;
};

const renderTextField = ({
	input,
	label,
	meta: { touched, error },
	...custom
}) => (
	<TextField
		hintText={label}
		floatingLabelText={label}
		errorText={touched && error}
		{...input}
		{...custom}
	/>
);

const MyForm = props => (
	<div>
		<div className="nextpage__form__text">
			<p>
				Crop circles are Chuck Norris' way of telling the world that sometimes corn needs to lie down.

The quickest way to a man's heart is with Chuck Norris' fist.

Chuck Norris has two speeds. Walk, and Kill If you ask Chuck Norris what time it is, he always says, "Two seconds 'til." After you ask, "Two seconds 'til what?" he roundhouse kicks you in the face, Chuck Norris doesn't churn butter. He roundhouse kicks the cows and the butter comes straight out Crop circles are Chuck Norris' way of telling the world that sometimes corn needs to lie down. Police label anyone attacking Chuck Norris as a Code 45-11... a suicide, When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris. What was going through the minds of all of Chuck Norris' victims before they died? His shoe. Chuck Norris invented Kentucky Fried Chicken's famous secret recipe, with eleven herbs and spices. But nobody ever mentions the twelfth ingredient: Fear There is no chin behind Chuck Norris' beard. There is only another fist.

Chuck Norris is ten feet tall, weighs two-tons, breathes fire, and could eat a hammer and take a shotgun blast standing. Chuck Norris once roundhouse kicked someone so hard that his foot broke the speed of light, went back in time, and killed Amelia Earhart while she was flying over the Pacific Ocean, Remember the Soviet Union? They decided to quit after watching a DeltaForce marathon on Satellite TV. 
			</p>
		</div>
		<div className="nextpage__form">
			<form>
				<Field name="nomDefunt" component={renderTextField} label="NOM DU DEFUNT" />
				<Field name="prenomDefunt" component={renderTextField} label="PRENOM DU DEFUNT" />
				<Field name="hopital" component={SelectField} hintText="HOPITAL OU SE TROUVE LE DEFUNT" label="HOPITAL OU SE TROUVE LE DEFUNT">
					<MenuItem value="HSP" primaryText="Hopital Saint-Pierre" />
					<MenuItem value="HSJ" primaryText="Hopital Saint-Joseph" />
				</Field>
				<Field name="dateDeces" component={DatePicker} format={null} hintText="DATE DU DECES" label="DATE DU DECES" />
				<Field name="lieuEnterrement" component={renderTextField} label="LIEU PROBABLE DES FUNERAILLES" />
				<button type="submit" className="nextpage__form__button" onClick={props.handleContinue}>CONTINUER</button>
			</form>
		</div>
	</div>
);

export default reduxForm({
	form: 'accueil',
	validate,
})(MyForm);
