import React from 'react'

export const Grid = ({children}) => {
    return (
        <div className="grid">
            {children}
        </div>
    )
}

export const Col = ({children}) => {
    return (
        <div className="col">
            {children}
        </div>
    )
}

export const Container = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}