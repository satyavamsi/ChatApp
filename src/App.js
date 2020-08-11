import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/js/Header';
import Sidebar from './components/js/Sidebar';
import Chat from './components/js/Chat';
import Login from './components/js/Login';

import './App.css';

import { useStateValue } from './components/helpers/StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
            <>
              <Header />
              <div className="app__body">
                <Sidebar />
                <Switch>
                  <Route path="/channel/:channelId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h3>Select a channel from the sidebar</h3>
                  </Route>
                </Switch>
              </div>
            </>
          )}

      </Router>
    </div>
  );
}

export default App;
