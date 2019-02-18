import React from 'react';
import '../../pages/accueil/index.css';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'material-ui';
import { Toggle, SelectField } from 'redux-form-material-ui';
import { NavLink } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

// Fonction qui vérifie que les champs soient correctement remplis.
const validate = (values) => {
  const errors = {};
  if (!values.mailContact) {
    errors.mailContact = 'Requis';
  }
  if (values.mailContact && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mailContact)) {
    errors.mailContact = 'Adresse e-mail non valide';
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

// Formulaire numéro 2
const MyForm2 = () => (
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
        <Field name="lieuFunerailles" component={SelectField} hintText="REGION PROBABLE DES FUNERAILLES" label="REGION PROBABLE DES FUNERAILLES">
					<MenuItem value="ANVERS" primaryText="Province d'Anvers" />
					<MenuItem value="BF" primaryText="Province du Brabant flamand" />
					<MenuItem value="BW" primaryText="Province du Brabant wallon" />
					<MenuItem value="BRU" primaryText="Région Bruxelles-Capitale" />
					<MenuItem value="F-OCC" primaryText="Province de Flandre-Occidentale" />
					<MenuItem value="F-OR" primaryText="Province de Flandre-Orientale" />
					<MenuItem value="HAI" primaryText="Province du Hainaut" />
					<MenuItem value="LIEGE" primaryText="Province de Liège" />
					<MenuItem value="LIM" primaryText="Province du Limbourg" />
					<MenuItem value="LUX" primaryText="Province du Luxembourg" />
					<MenuItem value="NAM" primaryText="Province de Namur" />
				</Field>
        <Field name="informations" component={Toggle} label="Je désire recevoir des informations sur les démarches administratives à effectuer après les funérailles (Succession, pension, résiliation de contrat, remboursements, etc.)" />
        <NavLink to="/choix-de-base"><button type="submit" className="nextpage__form__button">CONTINUER</button></NavLink>
      </form>
    </div>
  </div>
);

// export du formulaire numéro 2 ainsi que la fonction validante
export default reduxForm({
  form: 'accueil',
	destroyOnUnmount: false,
  validate,
})(MyForm2);
