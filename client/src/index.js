import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import KeyTermList from './containers/KeyTermList';
import ProductsContainer from './containers/ProductsContainer';
import Logout from './components/auth/Logout';
import NavBar from './components/NavBar';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
	    <NavBar />
	    <Route exact path="/" component={App} />
	    <Route exact path="/products" component={ProductsContainer} />
	    <Route exact path="/keyterms" component={KeyTermList} />
	    <Route exact path="/logout" component={Logout} />
    </Router>
  </Provider>
)

render(<Root store={store} />, document.getElementById('root'))

export default Root;