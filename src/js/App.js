// Packages
import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// Containers
import Home from './containers/Home';
import Photo from './containers/Photo';
import Missing from './containers/Missing';

const App = () => (
  <Router>
    <ScrollToTop>
      <Fragment>
        <Route component={Header} />
        <main className="main row">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/photos/:photo" component={Photo} />
            <Redirect from="/photos" to="/" />
            <Route path="/404" component={Missing} />
            <Redirect from="*" to="/404" />
          </Switch>
        </main>
        <Route component={Footer} />
      </Fragment>
    </ScrollToTop>
  </Router>
);

export default App;
