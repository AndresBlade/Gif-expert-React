import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        const categoryExists = categories.some(cat => cat.toLowerCase().match(newCategory.toLowerCase()))
        if (categoryExists) return
        setCategories(cat => [newCategory, ...cat])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />

            {categories.map(category =>
            (
                <GifGrid key={category} category={category} />
            )
            )}
        </>
    )
}
