/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { findByTestAtrr } from '../helpers';
import Pokemon from '../../components/Pokemon';

describe('Pokemon Component', () => {
  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        pokemon: {
          id: 1,
          name: 'bulbasaur',
        },
      };
      wrapper = shallow(<Pokemon {...props} />);
    });

    it('renders paragraph correctly', () => {
      render(<p />);
    });

    it('Should render pokemon name', () => {
      const name = findByTestAtrr(wrapper, '.link');
      expect(name.length).toBe(1);
    });
  });
});
