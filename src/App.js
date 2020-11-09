import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import NavMenu from './components/Nav-menu/Nav-menu';
import Page from './components/Page/Page';

export const MENU = [
  {
    title: 'Sign In',
    path: '/sign-in',
    component: SignIn,
    exact: true
  },
  {
    title: 'Sign Up',
    path: '/sign-up',
    component: SignUp,
    exact: true
  }];

function App() {
  return (
    <div>

      <Router>
        <NavMenu />
        <Switch>
          {MENU.map(({ path, component, exact }) => (
            <Route key={component} path={path} exact={exact} component={component} />
          ))}

          <Route path='/' exact render={() => <Redirect to='/sign-in' />} />
          <Route path='/page' exact component={Page} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
