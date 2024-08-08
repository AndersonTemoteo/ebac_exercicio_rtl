import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve inserir dois comentários corretamente', () => {
        render(<PostComment/>);
        const botao = screen.getByTestId('btn-inserir-comentario')

        for (let i = 1; i <= 2; i++) {
            userEvent.type(screen.getByTestId('txt-area'), 'comentario '+ i)
            fireEvent.click(botao)
        }
        
        expect(screen.getByText('comentario 1')).toBeInTheDocument()
        expect(screen.getByText('comentario 2')).toBeInTheDocument()
    })
});