import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import { HomepageComponent } from './components/homepage-component/HomepageComponent';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';
import { LoginComponent } from './components/login-component/LoginComponent';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Router>
          <NavbarComponent />
          <Switch>
            <Route path="/login" component={LoginComponent}/>
            <Route path="/" component={HomepageComponent}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
