import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from './pages/accueil/index';
import PageBase from './components/Base/Base';
import Obseques from './components/Obseques/index';
import Cercueil from './components/Cercueil/index';
import Annexe from './components/infos/index';
import Confident from './components/confident/index';
import Utile from './components/utile/index';
import Conta from './components/conta/index';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path={['/', '/accueil']} exact component={Accueil} />
        <Route path="/choix-de-base" exact component={PageBase} />
        <Route path="/choix-des-obseques" exact component={Obseques} />
        <Route path="/choix-de-cercueil" exact component={Cercueil} />
        <Route path="/cookies" component={Annexe} />
        <Route path="/confidentialité" component={Confident} />
        <Route path="/utilisation" component={Utile} />
        <Route path="/contact" component={Conta} />
      </Switch>
    </BrowserRouter>
  </div>

);


export default App;
