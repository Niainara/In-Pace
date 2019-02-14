import React, { Component } from 'react';
import './index.css';

class Cookie extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="container">
        <h1 id="title">Politique d`utilisation des cookies</h1>
        <p className="text">Cette politique a pour objectif de vous expliquer la manière dont le site www.in-pace.be (ci-après le « Site ») utilise les cookies. La simple visite et utilisation du Site par le visiteur marque son accord avec les termes de la présente politique d’utilisation des cookies.</p>
        <h2 className="subtitle">1.Qu`est-ce qu`un cookie ?</h2>
        <p className="text">
        Un « cookie » est un fichier de données
        ou de textes que le serveur d’un site enregistre de manière
        temporaire ou permanente sur l’équipement de l’utilisateur
        (disque dur de l’ordinateur, tablette, smartphone ou tout autre appareil similaire)
        par l’intermédiaire de son navigateur (par exemple Internet Explorer).
        Les cookies peuvent aussi être installés par des tiers avec lesquels IN PACE
        collabore. Les cookies retiennent un certain nombre d’informations,
        comme par exemple les choix effectués par les visiteurs ou des statistiques
        relatives aux visiteurs du Site. Ces informations permettent par exemple de
        s’assurer que les applications du Site fonctionnent correctement ou encore d’adapter
        le contenu du Site en fonction du visiteur.
        </p>
        <h2 className="subtitle">2.Pourquoi utilisons-nous les cookies ?</h2>
        <p className="text">IN PACE utilise des cookies afin d’améliorer l’utilisation et les fonctionnalités de son Site, d’analyser la manière dont les visiteurs utilisent le site et d’établir des statistiques. Certains de ces cookies sont donc indispensables au fonctionnement du Site alors que d’autres ont simplement pour objectif d’améliorer la structure, la navigation ou le contenu du Site.</p>
        <h2 className="subtitle">3.Quels types de cookies utilisons-nous ?</h2>
        <p className="text">Le Site utilise les cookies suivants :</p>
        <p className="text">Les cookies techniques qui sont indispensables à l’exploitation et au fonctionnement du Site. Ces cookies permettent de se connecter et de naviguer aisément sur le Site, par exemple en détectant le type d’appareil du visiteur, le type de navigateur, la résolution d’écran ou la taille de police de votre navigateur;</p>
        <p className="text">Les cookies statistiques/analytiques qui permettent de compter le nombre de visiteurs et d’améliorer leur navigation, par exemple en analysant leur comportement lorsqu’ils visitent le Site;</p>
        <p className="text">Les cookies fonctionnels qui permettent d’activer des fonctionnalités spécifiques sur le Site afin d’améliorer l’expérience du visiteur, par exemple en se souvenant de ses choix ou de ses demandes ;</p>
        <p className="text">Les cookies de performance qui aident à évaluer et améliorer le contenu et la performance du Site, par exemple en comptabilisant le nombre de visiteurs ou en identifiant les pages ou les clics les plus utilisés;</p>
        <p className="text">Les cookies de traçage via Google Analytics qui génèrent des statistiques de visite permettant d’améliorer en permanence le Site et d’offrir au visiteur un contenu pertinent. Pour de plus amples informations, la politique de Google en matière de protection des données peut être consultée à l’adresse suivante : https://policies.google.com/privacy?gl=be.</p>
        <h2 className="subtitle">4.Combien de temps conservons-nous les cookies ?</h2>
        <p className="text">Le délai de conservation des cookies varie selon leur type : les cookies indispensables (jusqu’à la fermeture du navigateur), les cookies fonctionnels (1 an) et les cookies statistiques ou de performance (5 ans).</p>
        <h2 className="subtitle">5.Comment gérer les cookies ?</h2>
        <p className="text">La majorité des navigateurs sont configurés de manière à accepter les cookies. Il est néanmoins possible pour les visiteurs de personnaliser leurs préférences en la matière via les paramètres de ces mêmes navigateurs :</p>
        <ul>
          <li>- Internet Explorer: http://windows.microsoft.com/en-us/windows-vista/block-or-allow-cookies;</li>
          <li>- Chrome: https://support.google.com/accounts/answer/61416?hl=en;</li>
          <li>- Firefox: https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences;</li>
          <li>- Safari: http://support.apple.com/kb/PH5042;</li>
        </ul>
        <p className="text">Si le visiteur désactive certains cookies, certaines parties du Site pourraient alors ne plus être consultables/utilisables ou ne l’être que partiellement.</p>
        <p className="text">Si vous utilisez des appareils différents pour visiter le Site, vos paramètres de préférences en matière de cookies devront être personnalisés sur chaque appareil individuellement.</p>
        <h2 className="subtitle">6.Données personelles ?</h2>
        <p className="text">Dans la mesure où les cookies collectent des données personnelles vous concernant, cette collecte et le traitement qui s`ensuit sera effectué conformément à notre politique de confidentialité.</p>

      </div>
    );
  }
}


export default Cookie;
