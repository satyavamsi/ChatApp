import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';

import './App.css';

import { useStateValue } from './StateProvider';

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
                    <h1>WELCOME</h1>
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
