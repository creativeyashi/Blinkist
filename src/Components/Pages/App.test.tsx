import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from '../../App';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);

test('renders learn react link', () => {
  render(<App />, { wrapper: MemoryRouter });
  
});