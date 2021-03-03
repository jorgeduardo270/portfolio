import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import Background from './components/Background/Background.js';
import HomeScreen from './screens/Home/';
import CertificatesScreen from './screens/Certificates';

function App() {
  return (
    <div className="App">
        <Background>
          <Router>
              <Switch>
                  <Route path="/certificates" component={CertificatesScreen} />
                  <Route path="/" component={HomeScreen} />
              </Switch>
          </Router>
        </Background>
    </div>
  );
}

export default App;
