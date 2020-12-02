import React from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { DashboardPage } from './pages/dashboard.page';
import { HomePage } from './pages/home.page';
import store from './store';

/**
 * This is main App component. Here, you can define the routes
 * and global layout if necessary.
 */
const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {/* Insert layouting or other stuff here. */}

        <Switch>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
