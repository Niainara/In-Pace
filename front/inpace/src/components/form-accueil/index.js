import React from 'react';
import './index.css';
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

const MyForm = (props) => {
	return (
		<form className="form">
			<Field name="nomDefunt" component={renderTextField} label="NOM DU DEFUNT" />
			<Field name="prenomDefunt" component={renderTextField} label="PRENOM DU DEFUNT" />
			<Field name="hopital" component={SelectField} hintText="HOPITAL OU SE TROUVE LE DEFUNT" label="HOPITAL OU SE TROUVE LE DEFUNT">					
				<MenuItem value="HSP" primaryText="Hopital Saint-Pierre" />
				<MenuItem value="HSJ" primaryText="Hopital Saint-Joseph" />
			</Field>
			<Field name="dateDeces" component={DatePicker} format={null} hintText="DATE DU DECES" label="DATE DU DECES" />
			<Field name="lieuEnterrement" component={renderTextField} label="LIEU PROBABLE DES FUNERAILLES" />
			<button type="submit" className="form__button">CONTINUER</button>
		</form>
	);
};

export default reduxForm({
	form: 'accueil',
	validate,
})(MyForm);
