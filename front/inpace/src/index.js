/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import devToolsEnhancer from 'remote-redux-devtools';
import obsequesReducer from './reducers/obsequesReducer';
import cercueilReducer from './reducers/cercueilReducer';

//On combine les reducers pour les passer en une fois au store
const rootReducer = combineReducers({
	form: formReducer,
	obsequesReducer,
	cercueilReducer,
})

//création du store auquel on passe nos reducers ainsi qu'une fonction permettant d'utiliser l'utilitaire redux sur navigateur
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//On encapsule notre App dans le provider redux, le router redux ainsi que le provider material UI
ReactDOM.render(<Provider store={store}><MuiThemeProvider muiTheme={getMuiTheme()}><App /></MuiThemeProvider></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
