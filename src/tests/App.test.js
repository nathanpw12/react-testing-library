import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testa o componente <App.js />', () => {
  it('O primeiro link deve possuir o texto "Home"', () => {
    renderWithRouter(<App />);
    const expectedHome = 'Home';
    const linkHome = screen.getByRole('link', { name: expectedHome });
    expect(linkHome).toBeInTheDocument();
  });

  it('O segundo link deve possuir o texto "About"', () => {
    renderWithRouter(<App />);
    const expectedText = 'About';
    const linkAbout = screen.getByRole('link', { name: expectedText });
    expect(linkAbout).toBeInTheDocument();
  });

  it('O terceiro link deve possuir o texto "Favorite Pokémons"', () => {
    renderWithRouter(<App />);
    const expectedFavorite = 'Favorite Pokémons';
    const linkFavorite = screen.getByRole('link', { name: expectedFavorite });
    expect(linkFavorite).toBeInTheDocument();
  });
});
