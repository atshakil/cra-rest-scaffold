import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { incrementDummyValue, updateDummyValue } from '../../actions/Dummy';
import './assets/dashboard.css';

export class VisibleDashboard extends Component {
  componentDidMount() {
    const { updateDummyValue } = this.props;
    updateDummyValue && updateDummyValue();
  }

  render() {
    const { dummyValue, incrementDummyValue } = this.props;

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'><FormattedMessage id='dashboard.title' /></h1>
        </header>
        <p className='App-body'>
          Dummy Body
        </p>
        ||{dummyValue}||
        <button onClick={e => incrementDummyValue()}>Increment</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dummyValue: state.dummy.dummyValue
});

export default withRouter(connect(mapStateToProps, { incrementDummyValue, updateDummyValue })(VisibleDashboard));
