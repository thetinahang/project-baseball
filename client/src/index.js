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
import ProductList from './containers/ProductList';
import Logout from './components/Logout';
import NavBar from './components/NavBar';
// import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));//

//// If you want your app to work offline and load faster, you can change
//// unregister() to register() below. Note this comes with some pitfalls.
//// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

const store = createStore(rootReducer, applyMiddleware(thunk));

// remove later
const About = () => <h1>This is my about component!</h1>;

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
    	<NavBar />
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/products" component={ProductList} />
      <Route exact path="/keyterms" component={KeyTermList} />
      <Route exact path="/keyterms" component={KeyTermList} />
      <Route exact path="/logout" component={Logout} />
    </Router>
  </Provider>
)

render(<Root store={store} />, document.getElementById('root'))

export default Root;