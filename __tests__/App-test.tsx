/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react-native'

it('renders correctly', () => {
  render(<App />);

  const Text = screen.getAllByText('teste')

  expect(Text).toEqual('teste')
});
