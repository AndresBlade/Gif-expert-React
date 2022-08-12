import React from 'react'
import '../spinner.css'

export const LoadingSpinner = ({ isLoading }) => {
    console.log(isLoading)
    return (
        isLoading && (<div className="spinner-container">
            <div className="spinner"></div>
        </div>)
    )
}
