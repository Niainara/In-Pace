import React from 'react';
import './index.css';
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

// Forumlaire numéro 2
const MyForm2 = () => (
  <div className="form">
    <div className="form__block">
      <div className="form__block__description">
        <p className="nextpage__form__text">Cette donnée est nécessaire pour vous envoyer (si les désirez) un récapitulatif des services disponibles et assurer la qualité du référencement.</p>
        <p className="nextpage__form__text">Cette donnée est nécessaire afin de vous fournir un aperçu des pompes funèbres disponibles dans votre région</p>
      </div>
      <div className="nextpage__form">
        <form className="form__fields">
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
        </form>
      </div>
    </div>
    <div className="form__submit">
      <div className="form__submit__toggle">
        <Field name="informations" component={Toggle} />
        <p className="form__submit__toggle__text">Je désire recevoir des informations sur les démarches administratives à effectuer après les funérailles (Succession, pension, résiliation de contrat, remboursements, etc.)</p>
      </div>
      <NavLink to="/choix-de-base"><button type="submit" className="nextpage__form__button">CONTINUER</button></NavLink>
    </div>
  </div>
);

// export du formulaire numéro 2 ainsi que la fonction validante
export default reduxForm({
  form: 'accueil',
  destroyOnUnmount: false,
  validate,
})(MyForm2);
