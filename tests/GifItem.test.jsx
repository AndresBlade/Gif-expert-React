import { render, screen } from "@testing-library/react"
import { GifItem } from "../src/components/GifItem"


describe('Pruebas en <GifItem />', () => {
    test('Debe de hacer match con el snapshot', () => {

        const title = 'Sun'
        const url = 'https://sun.com/sun.jpg'

        const { container } = render(<GifItem title={title} url={url} />)

        expect(container).toMatchSnapshot()

    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        const title = 'Sun'
        const url = 'https://sun.com/sun.jpg'
        render(<GifItem title={title} url={url} />)
        screen.debug()
    })
})
