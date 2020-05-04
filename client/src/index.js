import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import ProductsContainer from './containers/ProductsContainer';

const store = createStore(rootReducer, applyMiddleware(thunk));//

//ReactDOM.render(
//  <Provider store={store}>
//    <App />
//  </Provider>, document.getElementById('root')
//);

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Route exact path="/" component={App} />
			<Route exact path="/products" component={ProductsContainer} />
		</Router>
	</Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));