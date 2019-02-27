import React, { Component } from 'react';
import './index.css';


class Utilisation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="container" className="container__utilisation">
        <h1 id="title">Conditions d’utilisation du site internet www.in-pace.be</h1>
        <h2 className="subtitle">1.Généralités</h2>
        <p className="text">En utilisant ce site internet, le visiteur marque son accord avec les présentes conditions d’utilisation. IN PACE se réserve le droit de modifier les présentes conditions à tout moment et sans avertissement préalable.</p>
        <h2 className="subtitle">2.Usage limité à des fins personelles</h2>
        <p className="text">Le visiteur peut uniquement utiliser ce site internet à des fins personnelles et n’est pas autorisé à modifier, copier, distribuer, diffuser, publier, reproduire, céder sous licence, vendre ou transmettre des informations, photos, logos, pictogrammes, produits, services ou logiciels obtenus en tout ou en partie depuis ce site internet, ni à créer des produits dérivés de ces mêmes éléments sans l´accord préalable et écrit d’IN PACE.</p>
        <h2 className="subtitle">3.Usage illicite ou interdit</h2>
        <p className="text">Le visiteur s´engage à ne pas utiliser ce site internet à des fins illicites ou interdites par les présentes conditions d´utilisation. Dans ce cadre, le visiteur s’engage notamment (non exhaustif) à ne pas pirater, craquer ou télécharger un virus sur ce site internet.</p>
        <h2 className="subtitle">4.Droits d’auteur</h2>
        <p className="text">Tous les éléments de ce site internet sont protégés par les droits d´auteur d’IN PACE. D´autres noms de services, produits ou sociétés mentionnés sur ce site internet peuvent également être les marques commerciales de leurs propriétaires respectifs (par exemple des entrepreneurs de pompes funèbres).</p>
        <h2 className="subtitle">5.Exclusion de responsabilité</h2>
        <p className="text">Les informations, produits et services proposés sur ce site Internet peuvent contenir des erreurs techniques ou des fautes de frappe auxquelles IN PACE peut apporter à tout moment des corrections et/ou modifications.</p>
        <p className="text">IN PACE ne peut en aucun cas être rendu responsable des dommages résultant:</p>
        <ul>
          <li>de la lenteur ou de l’inaccessibilité de ce site internet ; ou</li>
          <li>des informations, produits et services proposés sur ce site internet.</li>
        </ul>
        <p className="text">Les informations, produits et services repris sur ce site internet sont principalement proposés par des tiers (notamment les entrepreneurs de pompes funèbres ou autres fournisseurs de services) qui restent les seuls responsables des informations, produits et services qu’ils fournissent.</p>
        <h2 className="subtitle">6.Loi applicable et juridictions compétentes</h2>
        <p className="text">L’utilisation de ce site internet est régie par le droit belge et, sauf si le droit applicable en dispose autrement, tout litige résultant de l’utilisation de ce site internet sera soumis aux tribunaux francophones de Bruxelles.</p>

      </div>
    );
  }
}

export default Utilisation;
