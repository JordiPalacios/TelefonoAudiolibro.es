
export const Section = ({ children, className = '', as = 'section', id = '' }) => {
    const Tag = as
    return (
        <Tag id={id} className= {`w-full h-auto select-none text-balance ${className}`}>
            {children}
        </Tag>
    )
}
