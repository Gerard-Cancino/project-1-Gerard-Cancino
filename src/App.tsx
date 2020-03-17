import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import {store,persistor} from './Store'
import { PersistGate } from 'redux-persist/integration/react';
import { HomepageComponent } from './components/homepage-component/HomepageComponent';
import NavbarComponent from './components/navbar-component/NavbarContainer';
import LoginComponent from './components/login-component/LoginContainer';
import RoleMainpageComponent from './components/role-mainpage-component/RoleMainpageContainer';
import UserListComponent from './components/user-list-component/UserListContainer';
import ProfileComponent from './components/profile-component/ProfileContainer';
import ReimbursementListComponent from './components/reimbursement-list-component/ReimbursementListContainer';
import UserReimbursementComponent from './components/user-reimbursements-component/UserReimbursementContainer';
import UserComponent from './components/user-component/UserContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <Router >
            <NavbarComponent />
            <Switch>
              <Route path="/user/:id" component={UserComponent} />
              <Route path="/user-reimbursements" component={UserReimbursementComponent}/>
              <Route path="/reimbursements" component={ReimbursementListComponent} />
              <Route path="/users" component={UserListComponent} />
              <Route path="/profile" component={ProfileComponent} />
              <Route path="/mainpage" component={RoleMainpageComponent}/>
              <Route path="/login" component={LoginComponent}/>
              <Route path="/" component={HomepageComponent}/>
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
