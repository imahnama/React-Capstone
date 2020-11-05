/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<select />, div);
});

it('renders navbar correctly', () => {
  render(<nav />);
});
