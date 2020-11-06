import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<nav />, div);
});

it('renders navbar correctly', () => {
  render(<nav />);
});
