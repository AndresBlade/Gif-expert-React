import PropTypes from "prop-types"
import { GifItem } from "./GifItem"
import { useFetchGifs } from '../hooks/useFetchGifs'
import { LoadingSpinner } from "./LoadingSpinner"

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    // const [images, setImages] = useState([])

    // const getImages = async () => {
    //     const newImages = await getGifs(category)
    //     setImages(newImages)
    // }

    // useEffect(() => {
    //     getImages()
    // }, [])

    return (
        <>
            <LoadingSpinner isLoading={isLoading} />
            <div className="card-grid">
                {
                    images.map((image) =>
                        <GifItem key={image.id} {...image} />
                    )}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}


