import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App';
import Login from './login/Login';
import Register from './login/Register';
import 'semantic-ui-css/semantic.min.css';
import URLS from './utils/URLS';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path={URLS.LOGIN} component={Login}/>
          <Route path={URLS.REGISTER} component={Register}/>
        </Switch>
      </div>
    </BrowserRouter>
  </I18nextProvider>,
  document.getElementById('root')
);
registerServiceWorker();
