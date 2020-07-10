import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Navbar } from './Components/Layout/Navbar/Navbar';

it('should render Navbar', () => {
  const wrapper = shallow(<App />);
  const navbar = wrapper.find(Navbar);

  expect(navbar.exists()).toBe(true);
});
