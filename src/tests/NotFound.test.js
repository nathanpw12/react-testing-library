import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testa o componente <NotFound.js/>', () => {
  it(`Teste se a página contém um heading h2, 
com o texto "Page requested not found 😭"`, () => {
    renderWithRouter(<NotFound />);
    const text = /Page requested not found Crying emoji/i;
    const headingLink = screen.getByRole('heading', { level: 2, name: text });
    expect(headingLink).toBeInTheDocument();
  });

  it('Teste se a página contém a imagem "https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"', () => {
    renderWithRouter(<NotFound />);
    const imageLink = screen.getByRole('img', { name:
    'Pikachu crying because the page requested was not found',
    });
    const image = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(imageLink).toHaveAttribute('src', image);
  });
});
