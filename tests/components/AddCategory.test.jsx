import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'
import UserEvent from '@testing-library/user-event'


describe('Pruebas en <AddCategory />', () => {
    const inputValue = 'Prueba'

    test('Debería de hacer match con el snapshot anterior', () => {

        const { container } = render(<AddCategory onNewCategory={() => { }} />)
        expect(container).toMatchSnapshot()
    })

    test('Debería cambiar el valor de la caja de texto', async () => {

        render(<AddCategory onNewCategory={() => { }} />)
        const user = UserEvent.setup()
        const input = screen.getByRole('textbox');
        await user.type(input, inputValue)
        expect(input).toHaveValue(inputValue)
    })

    test('Debería de llamar onNewCategory si el input tiene un valor', async () => {
        const user = UserEvent.setup()
        const onNewCategory = jest.fn()
        //ToDo
        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form')
        await user.type(input, inputValue)
        fireEvent.submit(form)
        expect(input).toHaveValue('')

        expect(onNewCategory).toBeCalledTimes(1)
        expect(onNewCategory).toBeCalledWith(inputValue)




    })

    test('No debe de llamar onNewCategory si el input esta vacio', async () => {
        const user = UserEvent.setup()
        const onNewCategory = jest.fn()
        //ToDo
        render(<AddCategory onNewCategory={onNewCategory} />)
        const form = screen.getByRole('form')
        fireEvent.submit(form)

        expect(onNewCategory).not.toBeCalled()
    })

})