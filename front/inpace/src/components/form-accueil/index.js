// Le css de ce fichier se trouve dans ./pages/accueil/
import React from 'react';
import '../../pages/accueil/index.css';
import { reduxForm, Field } from 'redux-form';
import MenuItem from 'material-ui/MenuItem';
import {
	DatePicker,
	SelectField,
} from 'redux-form-material-ui';
import { TextField } from 'material-ui';

// fonction permettant de vérifier que les champs ne restent pas vides.
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

// fonction qui va recevoir les props et les passer au TextField
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

// Fonction principale qui retourne un formulaire redux
const MyForm = ({ handleContinue }) => (
	<div>
		<div className="nextpage__form__text">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	Fusce vel dolor risus. Aliquam bibendum lorem eu dui finibus pretium.
	In eu dolor consequat, sollicitudin diam id, ultricies nisl.
	Integer eget tristique erat. Aliquam id felis sit amet dui cursus viverra in nec velit.
	Duis vestibulum quam lobortis gravida mollis. In iaculis et lacus eu gravida.
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
				<button type="submit" className="nextpage__form__button" onClick={handleContinue}>CONTINUER</button>
			</form>
		</div>
	</div>
);

// On exporte le formulaire ainsi que la fonction qui permet de vérifier les champs
export default reduxForm({
	form: 'accueil',
	validate,
})(MyForm);
