import React from 'react';
import './index.css';


class HeaderOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container__header__otpions">
        <div className="header__otpions" />
        <ul className="header__otpions__progress">
          <li className="header__otpions__progress__item" />
          <li className="header__otpions__progress__item" />
          <li className="header__otpions__progress__item" />
          <li className="header__otpions__progress__item" />
        </ul>
        <h1 className="header__title__otpions">Les Options</h1>
        <p className="header__description__otpions">En fonction des volontés du défunt et/ou de vos désirs, il est possible de recourir à divers services et/ou produits additionnels dans le cadre des funérailles. Seuls les services fournis par l’ensemble des entrepreneurs de pompes funèbres sont proposés ci-dessous, à savoir l’organisation d’une cérémonie (laïque ou religieuse), la fourniture de fleurs ou d’une urne (en cas de crémation). Des explications détaillées relatives à chacun de ces services/produits peuvent être consultées en cliquant que le champ correspondant.</p>
        <p className="header__description__otpions"> D’autres services et/ou produits additionnels (fournis par des prestataires externes en coopération avec les entrepreneurs de pompes funèbres) peuvent également être inclus dans l’organisation des funérailles : réception, avis nécrologique, faire-part/remerciements, rapatriement, etc. Il convient de se renseigner auprès des prestataires concernés ou de l’entrepreneur de pompes funèbres pour obtenir les différents prix applicables. Des prix indicatifs vous seront néanmoins indiqués lors du récapitulatif.</p>
      </div>
    );
  }
}
export default HeaderOptions;
