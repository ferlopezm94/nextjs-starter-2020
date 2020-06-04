import React from 'react';
import renderer from 'react-test-renderer';

import Home from './../pages/index';

describe('Home page', () => {
  test('renders', () => {
    const component = renderer.create(<Home />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
