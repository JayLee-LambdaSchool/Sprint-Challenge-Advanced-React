import React from 'react';
import * as rtl from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import App from './App';

import PlayerCard from './Components/PlayersCard';
import PlayersList from './Components/PlayersList';

it('renders without crashing', () => {});

it('renders Searches', () => {
  const wrapped = rtl.render(<App/>);

  const heading = wrapped.queryAllByText(/Searches/i);
  expect(heading).toBeTruthy();
});

it('renders Womens World', () => {
  const wrapped = rtl.render(<App/>);

  const heading2 = wrapped.queryByText(/Women's World/i);

  expect(heading2).toBeTruthy();

  expect(heading2).toBeVisible();
});
