import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { incrementDummyValue } from '../../actions/Dummy';
import './assets/dashboard.css';

export class VisibleDashboard extends Component {
  render() {
    const { dummyValue, incrementDummyValue } = this.props;

    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Dummy Title</h1>
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

export default withRouter(connect(mapStateToProps, { incrementDummyValue })(VisibleDashboard));
