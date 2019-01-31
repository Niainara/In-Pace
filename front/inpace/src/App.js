import React from 'react';
import './App.css';
import Accueil from './pages/accueil/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
	<div>
		<BrowserRouter>
			<Switch>
				<Route path={["/", "/accueil"]} exact component={Accueil} />
			</Switch>
		</BrowserRouter>
	</div>);
export default App;
