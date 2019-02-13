import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from './pages/accueil/index';
import PageBase from './components/Base/Base';
import Obseques from './components/Obseques/index';
import Cercueil from './components/Cercueil/index';
import Options from './components/Options/index';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path={['/', '/accueil']} exact component={Accueil} />
        <Route path="/choix-de-base" exact component={PageBase} />
        <Route path="/choix-des-obseques" exact component={Obseques} />
        <Route path="/choix-de-cercueil" exact component={Cercueil} />
        <Route path="/choix-des-options" exact component={Options} />
      </Switch>
    </BrowserRouter>
  </div>);

export default App;
