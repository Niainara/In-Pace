import React from 'react';
import './index.css';


class RecapDevis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      InfoA: false,
      InfoB: false,
      InfoC: false,
      InfoD: false,
      InfoE: false,
      InfoF: false
    };
  }

  render() {
    const { InfoA } = this.state;
    const { InfoB } = this.state;
    const { InfoC } = this.state;
    const { InfoD } = this.state;
    const { InfoE } = this.state;
    const { InfoF } = this.state;
    return (
      <div>
        <div className="container__details__recap">
          <h2 className="container__details__recap__subtitle">Récapitulatif</h2>
          <div className="container__details__recap__content">
            <div className="container__details__recap__devis">
              <div className="container__details__recap__devis__content">
                <h3 className="container__details__recap__devis__titre">Devis</h3>
                <div className="container__details__recap__devis__item">
                  <div className="container__details__recap__devis__item__titre">Pour les services suivants</div>
                  <div className="container__details__recap__devis__item__liste">
                    <div className="container__details__recap__devis__item__liste__item change__color">
                      <p>Item</p>
                      <p>200€</p>
                    </div>
                    <div className="container__details__recap__devis__item__liste__item">
                      <p>Item</p>
                      <p>200€</p>
                    </div>
                  </div>
                  <div className="container__details__recap__devis__item__total">Total</div>
                </div>
              </div>
            </div>
            <div className="container__details__recap__non-inclus">
              <div className="container__details__recap__non-inclus__content">
                <h3 className="container__details__recap__non-inclus__titre">Non-inclus</h3>
                <div className="container__details__recap__non-inclus__item">
                  <div className="container__details__recap__non-inclus__item__liste">
                    <div className="container__details__recap__non-inclus__item__liste__item change__color">
                      <p>Emplacement cimetière, crémation</p>
                      <button
                        className="container__details__non-inlus show__infos"
                        type="button"
                        onClick={() => this.setState({
                          InfoA: !InfoA, InfoB: false, InfoC: false, InfoD: false, InfoE: false, InfoF: false,
                        })}
                      >
                       Infos
                      </button>
                    </div>
                    <div className="container__details__recap__non-inclus__item__liste__item">
                      <p>Cérémonie (hors frais pompes funèbres)</p>
                      <button
                        className="container__details__non-inlus show__infos"
                        type="button"
                        onClick={() => this.setState({
                          InfoB: !InfoB, InfoA: false, InfoC: false, InfoD: false, InfoE: false, InfoF: false,
                        })}>
                        Infos
                      </button>
                    </div>
                    <div className="container__details__recap__non-inclus__item__liste__item change__color">
                      <p>Réception</p>
                      <button
                        className="container__details__non-inlus show__infos"
                        type="button"
                        onClick={() => this.setState({
                          InfoC: !InfoC, InfoA: false, InfoB: false, InfoD: false, InfoE: false, InfoF: false,
                        })}>
                        Infos
                      </button>
                    </div>
                    <div className="container__details__recap__non-inclus__item__liste__item">
                      <p>Avis nécrologique</p>
                      <button
                        className="container__details__non-inlus show__infos"
                        type="button"
                        onClick={() => this.setState({
                          InfoD: !InfoD, InfoA: false, InfoB: false, InfoC: false, InfoE: false, InfoF: false,
                        })}>
                        Infos
                      </button>
                    </div>
                    <div className="container__details__recap__non-inclus__item__liste__item change__color">
                      <p>Faire-parts et remerciements</p>
                      <button
                        className="container__details__non-inlus show__infos"
                        type="button"
                        onClick={() => this.setState({
                          InfoE: !InfoE, InfoA: false, InfoB: false, InfoC: false, InfoD: false, InfoF: false,
                        })}>
                        Infos
                      </button>
                    </div>
                    <div className="container__details__recap__non-inclus__item__liste__item">
                      <p>Rapatriement</p>
                      <button
                        className="container__details__non-inlus show__infos"
                        type="button"
                        onClick={() => this.setState({
                          InfoF: !InfoF, InfoA: false, InfoB: false, InfoC: false, InfoD: false, InfoE: false,
                        })}>
                        Infos
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container__details__recap__explications">
          <div className="container__details__recap__explications__texte">
            {InfoA ? (
              (
                <div className="container__details__recap__explications__texte__cadre">
                  <div className="container__details__recap__explications__texte__item">
                    <h4>Emplacement cimetière, crémation</h4>
                    <p>Que ce soit dans le cadre d’une crémation ou d’une inhumation, il existe diverses possibilités de destinations ou lieux de repos pour les cendres ou le corps du défunt. La majorité de ces possibilités sont reprises ci-dessous. Les prix sont donnés à titre indicatifs et n’incluent pas les frais de transport et personnel éventuels des entreprises de pompes funèbres. Pour obtenir les prix précis, il convient de se renseigner auprès du crématorium ou de la commune concernée ou de l’entrepreneur de pompes funèbres.</p>
                    <p className="texte-souligne">En cas de crémation</p>
                    <p>Prix indicatif des services non repris dans l’estimation de devis :</p>
                    <p>Crématorium :</p>
                    <ul>
                      <li>Dispersion des cendres : gratuit</li>
                      <li>Columbarium : ± 665 EUR</li>
                      <li>Stèle : ± 1.250 EUR </li>
                    </ul>
                    <p>Cimetière (pour les résidents de la commune et personnes décédées sur le territoire de la commune) :</p>
                    <ul>
                      <li>Dispersion des cendres :gratuit</li>
                      <li>« Terre commune » : gratuit </li>
                      <li>Concession : à partir de ± 250-500 EUR </li>
                      <li>Columbarium : à partir de ± 250-500 EUR</li>
                      <li>Cavurne : à partir de ± 250-500 EUR</li>
                    </ul>
                    <p className="texte-souligne">En cas d’inhumation</p>
                    <p>Prix indicatif des services non repris dans l’estimation de devis :</p>
                    <p>Cimetière (pour les résidents de la commune et personnes décédées sur le territoire de la commune) :</p>
                    <ul>
                      <li>Emplacement « terre commune » : gratuit </li>
                      <li>Emplacement concession simple : à partir de ± 250-500 EUR </li>
                      <li>Emplacement caveau : à partir de ± 1.000 EUR</li>
                    </ul>
                    <p>Construction monument funéraire : ± 1.500 à 15.000 EUR</p>
                    <p>Construction caveau : ± 5.000 à 25.000 EUR</p>
                  </div>
                </div>
              )
            ) : null }
            {InfoB ? (
              (
                <div className="container__details__recap__explications__texte__cadre">
                  <div className="container__details__recap__explications__texte__item">
                    <h4>Cérémonie (hors frais pompes funèbres)</h4>
                    <p>Il est possible d’organiser une cérémonie laïque ou religieuse en mémoire du défunt. La cérémonie laïque est adaptée aux personnes ne désirant pas intégrer d'aspects religieux. La cérémonie est donc axée sur le souvenir du défunt. La famille peut y prendre la parole ou lire des poèmes pour rendre hommage au défunt. La cérémonie religieuse est adaptée aux personnes souhaitant intégrer des aspects religieux et se tiendra le plus souvent dans le lieu de culte concerné (église, mosquée, synagogue, etc.). Les prix repris ci-dessous sont indicatifs et n’incluent pas les frais de transport et personnel éventuels des entreprises de pompes funèbres. Pour obtenir les prix précis, il convient de se renseigner auprès du crématorium ou des lieux de culte concernés ou de l’entrepreneur de pompes funèbres.</p>
                    <p className="texte-souligne">Cérémonie religieuse</p>
                    <ul>
                      <li>Catholique (brabant wallon) : 250 EUR (sur base volontaire)</li>
                      <li>Autres cultes : information non disponible</li>
                    </ul>
                    <p className="texte-souligne">Cérémonie laïque</p>
                    <ul>
                      <li>Crématorium : 20-30 minutes gratuites + 50 EUR (par 15 minutes supplémentaires)</li>
                      <li>Maison laïque (brabant wallon) : gratuit</li>
                    </ul>
                  </div>
                </div>
              )
            ) : null }
            {InfoC ? (
              (
                <div className="container__details__recap__explications__texte__cadre">
                  <div className="container__details__recap__explications__texte__item">
                    <h4>Réception</h4>
                    <p>Il est possible d’organiser une réception après les funérailles. Une telle réception permet à la famille et aux proches du défunt de se retrouver après les obsèques. C’est l’occasion de se soutenir et de se rappeler les instants joyeux et les souvenirs partagés avec le défunt tout en lui rendant un hommage collectif. Enfin, c’est également une manière de remercier certains proches qui ont fait beaucoup de route pour venir assister aux funérailles.</p>
                    <p>Les frais liés à une telle réception dépendent principalement de 2 facteurs : (i) la location d’un éventuel lieu de réception et (ii) les services d’un éventuel traiteur. La plupart des services de traiteur proposent une formule incluant restauration (sandwichs, soupe et sucré), boissons (vins et softs), personnel et mange-debout. Les prix repris ci-dessous sont indicatifs. Pour obtenir les prix précis, il convient de se renseigner auprès des lieux de réception et traiteurs concernés.</p>
                    <ul>
                      <li>Lieu de réception : ± 250 à 1.500 EUR (en fonction de la taille et du prestige du lieu)</li>
                      <li>Traiteur : ± 15 à 35 EUR par personne (en fonction du traiteur et de la formule choisie)</li>
                    </ul>
                  </div>
                </div>
              )
            ) : null }
            {InfoD ? (
              (
                <div className="container__details__recap__explications__texte__cadre">
                  <div className="container__details__recap__explications__texte__item">
                    <h4>Avis nécrologique</h4>
                    <p>Il est possible de faire apparaître un avis nécrologique dans presse nationale et/ou régionale permettant d’informer les lecteurs du décès de votre proche. Les prix d’un avis nécrologique varient en fonction de la longueur de l’avis et du type de presse écrite (nationale ou régionale). Les prix repris ci-dessous sont indicatifs. Pour obtenir les prix précis, il convient de se renseigner auprès des journaux concernés.</p>
                    <ul>
                      <li>Avis nécrologique</li>
                      <li>± 100 à 1.000 EUR (en fonction du journal et de la longueur de l’avis)</li>
                    </ul>
                  </div>
                </div>
              )
            ) : null }
            {InfoE ? (
              (
                <div className="container__details__recap__explications__texte__cadre">
                  <div className="container__details__recap__explications__texte__item">
                    <h4>Faire-parts et remerciements</h4>
                    <p>Il est possible d’adresser un faire-part aux proches du défunt pour les informer du décès et pour les convier à l’éventuelle cérémonie ou réception suivant les funérailles. Il est également possible d’adresser un remerciement aux proches ayant fait part de leurs condoléances et/ou ayant assisté à l’éventuelle cérémonie. Les prix repris ci-dessous sont indicatifs. Pour obtenir les prix précis, il convient de se renseigner auprès des imprimeurs concernés.</p>
                    <ul>
                      <li>Faire-part ou remerciement : ± 0.5 EUR à 1 EUR par faire-part (en fonction du modèle choisi et de la quantité nécessaire)</li>
                    </ul>
                  </div>
                </div>
              )
            ) : null }
            {InfoF ? (
              (
                <div className="container__details__recap__explications__texte__cadre">
                  <div className="container__details__recap__explications__texte__item">
                    <h4>Rapatriement</h4>
                    <p>Pour les personnes ayant des origines ou des racines étrangères (ou simplement pour toute personne le souhaitant), il est possible d’organiser le rapatriement du corps du défunt vers un pays étranger. Le prix du rapatriement ne peut malheureusement pas être donné (même à titre indicatif) car il est trop dépendant des destinations, des disponibilités des moyens de transfert ou encore des périodes de l’année concernées</p>
                  </div>
                </div>
              )
            ) : null }
            <div className="container__details__recap__explications__send-mail">
              <button className="container__details__recap__explications__send-mail__btn" type="button">Recevoir</button>
              <p className="container__details__recap__explications__send-mail__texte">Je souhaite recevoir ce récapitulatif par mail</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecapDevis;
