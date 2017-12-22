import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import WizardOne from './components/WizardOne';
import WizardTwo from './components/WizardTwo';
import WizardThree from './components/WizardThree';
import WizardFour from './components/WizardFour';
import WizardFive from './components/WizardFive';

export default (
    <Switch>
        <Route exact path="/dashboard" component={ Dashboard } />
        <Route path="/wizardOne" component={ WizardOne } />
        <Route path="/wizardTwo" component={ WizardTwo } />
        <Route path="/wizardThree" component={ WizardThree } />
        <Route path="/wizardFour" component={ WizardFour } />
        <Route path="/wizardFive" component={ WizardFive } />
    </Switch>
)