import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testa o componente <FavoritePokemons.js />', () => {
  it(`Teste se é exibida na tela a mensagem "No favorite pokemon found", caso a pessoa
 não tenha pokémons favoritos`, () => {
    renderWithRouter(<FavoritePokemons />);
    const text = /No favorite pokemon found/i;
    const favoriteLink = screen.getByText(text);
    expect(favoriteLink).toBeInTheDocument();
  });
});
