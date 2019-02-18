import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from './pages/accueil/index';
import PageBase from './components/Base/Base';
import Obseques from './components/Obseques/index';
import MyForm2 from './components/form2-accueil/index';
const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path={['/', '/accueil']} exact component={Accueil} />
        <Route path="/choix-de-base" component={PageBase} />
        <Route path="/choix-des-obseques" component={Obseques} />
				<Route path="/accueil2" render={(props) => <Accueil {...props} Form={MyForm2} />} />
      </Switch>
    </BrowserRouter>
  </div>);

export default App;
