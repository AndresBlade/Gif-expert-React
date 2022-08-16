import React from 'react'
import '../spinner.css'

export const LoadingSpinner = ({ isLoading }) => {
    return (
        isLoading && (<div className="spinner-container" data-testid='spinner'>
            <div className="spinner"></div>
        </div>)
    )
}
