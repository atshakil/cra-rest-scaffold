import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import Dashboard from '../dashboard';
import NotFound from '../not_found';

class App extends Component {
  render() {
    const { locale, translations } = this.props;

    return (
      <IntlProvider locale={locale} key={locale} messages={translations}>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => ({
  locale: state.intl.locale,
  translations: state.intl.messages
});

export default connect(mapStateToProps)(App);
