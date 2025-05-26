
export const Section = ({ children, className = '', as = 'section' }) => {
    const Tag = as
    return (
        <Tag className= {`w-full h-auto px-10 select-none ${className}`}>
            {children}
        </Tag>
    )
}
