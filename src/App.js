import React, { Component } from 'react';
import './App.css';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import WizardOne from './components/WizardOne';
import WizardTwo from './components/WizardTwo';
import WizardThree from './components/WizardThree';
import WizardFour from './components/WizardFour';
import WizardFive from './components/WizardFive';
// import routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="app-main">
          {/* <Auth /> */}
          <Dashboard />
          {/* <WizardOne /> */}
          {/* <WizardTwo /> */}
          {/* <WizardThree /> */}
          {/* <WizardFour /> */}
          {/* <WizardFive /> */}
      </div>
    );
  }
}

export default App;
