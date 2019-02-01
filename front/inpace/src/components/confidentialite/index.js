import React, { Component } from 'react';
import './index.css';

class Confidentialite extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="container">
        <h1 id="title">Charte de confidentialité</h1>
        <h2 className="subtitle">1.En quoi consiste cette charte de confidentialité ?</h2>
        <p className="text">Cette charte s’applique à vos données à caractère personnel (en tant que personne physique) que nous traitons.</p>
        <h2 className="subtitle">2.Qui traite vos données à caractère personnel</h2>
        <p className="text">IN PACE, dont l’établissement est sis Rue Henri Stacquet 12, 1030 Schaerbeek, non encore inscrite à la Banque Carrefour des Entreprises, email contact@in-pace.com.</p>
        <p className="text">Nous sommes le responsable du traitement de vos données à caractère personnel.</p>
        <h2 className="subtitle">3.Qu`attendons-nous de vous ?</h2>
        <p className="text">Outre les données relatives à la personne décédée, nous nous attendons à ce que vous nous communiquiez uniquement des données à caractère personnel vous concernant. Si vous nous communiquez également des données à caractère personnel d’autres personnes vivantes, alors vous devez vous assurer d’avoir obtenu le consentement de la personne concernée.</p>
        <p className="text">Nous nous attendons également à ce que les données à caractère personnel que vous nous communiquez soient correctes et que, si certaines données spécifiques changent, que vous nous informiez rapidement de ce changement.</p>
        <h2 className="subtitle">4.Pour quelles finalités traitons-nous vos données à caractère personnel ?</h2>
        <p className="text">Pour les visiteurs du site web</p>
        <p className="text">Nous traitons vos données à caractère personnel :</p>
        <ul>
          <li>
              1.Pour assurer une bonne communication avec le(s) service(s)
               de funèbres sélectionné(s) afin de répondre et traiter votre demande
          </li>
          <li>
              2.À des fins de marketing direct pour donner suite à votre
               demande de recevoir des informations relatives aux démarches administratives.
                Nous effectuons ce traitement sur base de votre consentement.
          </li>
        </ul>
        <p className="text">Pour les professionnels (pompes funèbres ou autres fournisseurs de services)</p>
        <p className="text">Nous traitons vos données à caractère personnel afin de donner suite à votre demande d’ouverture de compte professionnel sur notre site web afin de répondre et traiter votre demande.</p>
        <h2 className="subtitle">5.Avec qui partage-t-on vos données à caractère personnel ?</h2>
        <p className="text">Pour les visiteurs du site web</p>
        <p className="text">Vos données à caractère personnel peuvent être transférées à des partenaires (comme par exemple les services de pompes funèbres concernés), à l’hébergeur de notre site web, à des tiers en cas d’obligation légale et à la police ou aux autorités judiciaires à leur demande s’ils sont en droit de faire une telle demande.</p>
        <p className="text">Pour les professionnels (pompes funèbres ou autres fournisseurs de services)</p>
        <p className="text">Vos données à caractère personnel peuvent être transférées aux visiteurs du site web, à l’hébergeur de notre site web, à des tiers en cas d’obligation légale et à la police ou aux autorités judiciaires à leur demande s’ils sont en droit de faire une telle demande.</p>
        <h2 className="subtitle">6.Vos données à caractère personnel sont-elles transférées en dehors de l'Union Européenne ?</h2>
        <p className="text">Nous ne transférons pas vos données à caractère personnel en dehors de l’Union européenne.</p>
        <h2 className="subtitle">7.Combien de temps conserve-t-on vos données à caractère personnel ?</h2>
        <p className="text">Pour les visiteurs du site web</p>
        <p className="text">Nous conservons vos données à caractère personnel pour une période de maximum 5 ans après votre visite sur notre site web.</p>
        <p className="text">Pour les professionnels (pompes funèbres ou autres fournisseurs de services)</p>
        <p className="text">Nous conservons vos données à caractère personnel aussi longtemps que vous désirez être référencé sur le site web et pour une période de maximum 5 ans après votre éventuel retrait du site web.</p>
        <h2 className="subtitle">8.Quels sont vos droits ?</h2>
        <p className="text">Vous pouvez nous contacter pour exercer les droits suivants dans les situations et selon les méthodes prévues par la législation applicable:</p>
        <ul>
          <li>
              Retirer votre consentement et vous opposer au traitement de vos données
               à caractère personnel à des fins de marketing (non applicable aux pompes
                funèbres ou autres fournisseurs de services) ;
          </li>
          <li>
              Demander l’accès à, ou la correction de, ou l’effacement de vos données
               à caractère personnel ou la limitation du traitement ;
          </li>
          <li>
              Demander la portabilité de vos données à caractère personnel,
               que vous nous avez communiquées.
          </li>
        </ul>
        <p className="text">Vous pouvez exercer tous ces droits en nous contactant à l’adresse mentionnée ci-dessus (article 2) ou par email contact@in-pace.com.</p>
        <p className="text">Vous pouvez toujours introduire une plainte auprès de l’autorité de protection des données, Rue de la Presse, 35, 1000 Bruxelles, contact@apd-gba.be, https://www.autoriteprotectiondonnees.be.</p>

      </div>
    );
  }
}

export default Confidentialite;
