import React from 'react'

export const Section = ({ children, className = '', as = 'section' }) => {
    const Tag = as
    return (
        <Tag className= {`w-full h-auto px-6 py-2 my-2 ${className}`}>
            {children}
        </Tag>
    )
}
