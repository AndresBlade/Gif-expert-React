import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { GifExpertApp } from "../../src/GifExpertApp"
import UserEvent from '@testing-library/user-event'



describe('Pruebas en <GifExpertApp />', () => {

    jest.setTimeout(10000)

    const category = 'Prueba'

    test('Deberia de hacer match con el snapshot', async () => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot()
    })

    test('Debería añadir una nueva categoria', async () => {
        const user = UserEvent.setup()
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        await user.type(input, 'Water')



        fireEvent.submit(form)

        await waitFor(() => {
            expect(screen.getAllByRole('img').length).toBeGreaterThan(0)
        }, { timeout: 5000 })



    })

    test('No debería añadir una nueva categoría si ya existe', async () => {
        const user = UserEvent.setup()
        const { container } = render(<GifExpertApp />);
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        await user.type(input, 'Water')
        fireEvent.submit(form)

        //Ingresa la misma categoría

        await user.type(input, 'Water')
        fireEvent.submit(form)

        await waitFor(() => {
            expect(container.querySelectorAll('.card-grid')).toHaveLength(1) //Que solo se añada una categoría
        }, { timeout: 5000 })
    })
})