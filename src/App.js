import React from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path='/' component={Login} />
        <Route exact path='/Home' component={Home} />
      </Router>
    </Provider>
  );
}

export default App;