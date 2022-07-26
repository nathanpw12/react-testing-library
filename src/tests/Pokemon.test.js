import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Testa o componente <Pokemon.js />', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon',
    () => {
      renderWithRouter(<App />);

      const name = screen.getByTestId('pokemon-name');
      expect(name).toBeDefined();
      expect(name).toHaveTextContent('Pikachu');

      const type = screen.getByTestId('pokemon-type');
      expect(type).toBeDefined();
      expect(type).toHaveTextContent('Electric');

      const weight = screen.getByTestId('pokemon-weight');
      expect(weight).toHaveTextContent('Average weight: 6.0 kg');

      const image = screen.getByAltText('Pikachu sprite');
      expect(image).toBeDefined();
      expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    });

  it('Teste se ao clicar no link de navegação do pokémon, é feito o redirecionamento',
    () => {
      renderWithRouter(<App />);
      const detailsLink = screen.getByRole('link', { name: 'More details' });
      userEvent.click(detailsLink);
      const checkPokemon = screen.getByRole('checkbox');
      userEvent.click(checkPokemon);
      const imageLink = screen.getByAltText('Pikachu is marked as favorite');
      expect(imageLink).toHaveAttribute('src', '/star-icon.svg');
    });

  it(`Teste se o card do pokémon indicado na Pokédex 
  contém um link de navegação para exibir detalhes deste pokémon.`, () => {
    const { history } = renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: 'More details' });
    userEvent.click(detailsLink);
    expect(history.location.pathname).toBe('/pokemons/25');
  });
});
