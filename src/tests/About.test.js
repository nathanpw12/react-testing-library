import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../helpers/renderWithRouter';

it('Teste se a página contém as informações sobre a Pokédex', () => {
  renderWithRouter(<About />);
  const titleLink = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
  expect(titleLink).toBeInTheDocument();
});

it('Teste se a página contém um heading h2 com o texto "About Pokédex"', () => {
  render(<About />);
  const name = 'About Pokédex';
  const headingLink = screen.getByRole('heading', { level: 2, name });
  expect(headingLink).toBeInTheDocument();
});

it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
  render(<About />);
  const imageLink = screen.getByRole('img', { name: 'Pokédex' });
  const image = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  expect(imageLink).toHaveAttribute('src', image);
});
