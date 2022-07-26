import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Testa o componente <Pokedex.js />', () => {
  it('Teste se a página contém um heading h2 com o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);
    const text = /Encountered pokémons/i;
    const pokedexLink = screen.getByRole('heading', { name: text, level: 2 });
    expect(pokedexLink).toBeInTheDocument();
  });

  it('Teste se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);
    const pokomeonsCardLink = screen.queryAllByTestId('pokemon-name');
    expect(pokomeonsCardLink).toHaveLength(1);
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const buttonLink = screen.getByRole('button', { name: 'All' });
    fireEvent.click(buttonLink);
    const reset = screen.getAllByTestId('pokemon-type-button');
    expect(reset).toBeDefined();
  });

  it('Verirfica se o botão existe', () => {
    renderWithRouter(<App />);
    const card = screen.getByRole('button', { name: /fire/i });
    fireEvent.click(card);
    const pokemonLink = screen.getAllByTestId('pokemon-type-button');
    expect(pokemonLink).toBeDefined();
  });
});
