import React from 'react';
import '../../pages/accueil/index.css';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'material-ui';
import { Toggle } from 'redux-form-material-ui';

// Fonction qui vérifie que les champs soient correctement remplis.
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

// Fonction qui reçoit des props et les passe au composant TextField
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

// Forumlaire numéro 2
const MyForm2 = ({ handleReturn }) => (
	<div>
		<div className="nextpage__form__text">
			<p>
				Lorem ipsum dolor sit amet, consectetur adisciping elit,
	sed do eiusmodem tempor incididunt ut labore et dolore magna aliqua.
	Ut enim ad minim veniam, quis nstrud exercitation ullamco laboris
	nisi ut aliquip ex ea commodo consequat.
			</p>
		</div>
		<div className="nextpage__form">
			<form>
				<Field name="mailContact" component={renderTextField} label="ADRESSE MAIL DE CONTACT" />
				<Field name="telephoneContact" component={renderTextField} label="NUMERO DE TELEPHONE DE CONTACT" />
				<Field name="informations" component={Toggle} label="Je désire recevoir des informations sur les démarches administratives à effectuer (pension, notification, résiliation, remboursement, etc.)" />
				<button type="submit" className="nextpage__form__button" onClick={handleReturn}>RETOUR</button>
				<button type="submit" className="nextpage__form__button">CONTINUER</button>
			</form>
		</div>
	</div>
);

// export du formulaire numéro 2 ainsi que la fonction validante
export default reduxForm({
	form: 'accueil2',
	validate,
})(MyForm2);
