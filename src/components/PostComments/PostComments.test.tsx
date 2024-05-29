import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    
    it('Deve adicionar dois comentários', () => {
        render(<PostComment/>);
        const textarea = screen.getByTestId('area-comentar');
        const button = screen.getByTestId('btn-comentar');

        const addComentario = (comentario: string) => {
            fireEvent.change(textarea, { target: { value: comentario } });
            fireEvent.click(button);
            expect(screen.getByText(comentario)).toBeInTheDocument();
        }

        addComentario('Comentário 1');
        addComentario('Comentário 2');
    })
});