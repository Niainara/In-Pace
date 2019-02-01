import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Accueil from './pages/accueil/index';
import Annexe from './components/infos/index';
import Confident from './components/confident/index';
import Utile from './components/utile/index';
import Conta from './components/conta/index';

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={Accueil} exact />
      <Route path="/cookies" component={Annexe} />
      <Route path="/confidentialite" component={Confident} />
      <Route path="/utilisation" component={Utile} />
      <Route path="/contact" component={Conta} />
    </Switch>
  </div>);
export default App;
