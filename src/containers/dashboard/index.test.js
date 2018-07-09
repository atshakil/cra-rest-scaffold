import React from 'react';
import ReactDOM from 'react-dom';
import { VisibleDashboard } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VisibleDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
