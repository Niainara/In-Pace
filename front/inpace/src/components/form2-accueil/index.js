import React from 'react';
import '../../pages/accueil/index.css';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'material-ui';

const validate = (values) => {
	const errors = {};
	if (!values.mailContact) {
		errors.mailContact = 'Requis';
	}
	if (values.mailContact && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mailContact)) {
		errors.mailContact = 'Adresse e-mail non valide';
	}
	if (!values.telephoneContact) {
		errors.telephoneContact = 'Requis';
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

const MyForm2 = props => (
	<div>
		<div className="nextpage__form__text">
			<p>
				Lorem ipsum dolor sit amet, consectetur adisciping elit, sed do eiusmodem tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</div>
		<div className="nextpage__form">
			<form>
				<Field name="mailContact" component={renderTextField} label="ADRESSE MAIL DE CONTACT" />
				<Field name="telephoneContact" component={renderTextField} label="NUMERO DE TELEPHONE DE CONTACT" />
				<button type="submit" className="nextpage__form__button" onClick={props.handleReturn}>RETOUR</button>
				<button type="submit" className="nextpage__form__button">CONTINUER</button>
			</form>
		</div>
	</div>
);

export default reduxForm({
	form: 'accueil2',
	validate,
})(MyForm2);
