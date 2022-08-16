import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {

    const category = 'Peluches'

    test('Debería de hacer match con el snapshot', async () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        const { container } = render(<GifGrid category={category} />)
        expect(container).toMatchSnapshot()
    })

    test('Debería de mostrar el loading inicialmente', async () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        render(<GifGrid category={category} />)
        expect(screen.getByTestId('spinner')).toBeInTheDocument()
    })

    test('Debe de mostrar items cuando se cargan las imagenes UseFetchGifs', async () => {

        const gifs = [{
            id: 'ABC',
            title: 'Peluche Viejo',
            url: 'https://peluches.com'
        },
        {
            id: '123',
            title: 'Peluches nuevos en oferta',
            url: 'https://peluchesOferta.com'
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />)

        screen.debug()

        expect(screen.getAllByRole('img')).toHaveLength(2)

    })
})