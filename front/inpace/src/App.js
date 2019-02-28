import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Accueil from './pages/accueil/index';
import PageBase from './components/Base/Base';
import Obseques from './components/Obseques/index';
import Cercueil from './components/Cercueil/index';
import Options from './components/Options/index';
import MyForm2 from './components/form2-accueil/index';
import Annexe from './components/infos/index';
import Confident from './components/confident/index';
import Utile from './components/utile/index';
import Conta from './components/conta/index';
import Detail from './components/Detail/index';
import Results from './components/results/index';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path={['/', '/accueil']} exact component={Accueil} />
        <Route path="/choix-de-base" exact component={PageBase} />
        <Route path="/choix-des-obseques" exact component={Obseques} />
        <Route path="/choix-de-cercueil" exact component={Cercueil} />
        <Route path="/choix-des-options" exact component={Options} />
        <Route path="/choix-de-base" component={PageBase} />
        <Route path="/accueil2" render={(props) => <Accueil {...props} Form={MyForm2} />} />
        <Route path="/cookies" component={Annexe} />
        <Route path="/confidentialité" component={Confident} />
        <Route path="/utilisation" component={Utile} />
        <Route path="/contact" component={Conta} />
        <Route path="/resultats" component={Results} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  </div>

);


export default App;
