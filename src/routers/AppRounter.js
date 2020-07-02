import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddExpencePage from '../components/AddExpencePage';
import EditExpencePage from '../components/EditExpencePage';
import ExpenceRoutePage from '../components/ExpenceRoutePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header'

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/create">
          <AddExpencePage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/edit/:id" component={EditExpencePage} />
          
        <Route path="/" exact={true}>
          <ExpenceRoutePage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;




