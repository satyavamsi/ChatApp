import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
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
          {/* React-Router -> Chat Screen */}
        </div>
      </Router>
    </div>
  );
}

export default App;
