import PropTypes from 'prop-types'

export const WhatsApp = ({ msg, className, label, colorText }) => {
    let content 

    if (className === "contactFixed") {
        content = 
        <div className="fixed mr-0 bottom-14 right-2 z-50 transition-transform duration-500 hover:scale-110">
                <a 
                href={msg} 
                target="_blank" 
                rel="noopener noreferrer"                
                aria-label='Enlace al WhatsApp de VisualShow360 para pedir información'>
                    <img id="whatsScroll" src="/icons/whatsapp.svg" alt='whatsAppSvg' loading='lazy'/>
                </a>
            </div>
    } else {
        content = 
        <a 
        href={msg} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: colorText }}        
        aria-label='Enlace al WhatsApp de VisualShow360 para pedir información'>
            {label}
        </a>
    }

return (
    <>
        {content}
    </>
)
}

WhatsApp.propTypes = {
    msg: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    colorText: PropTypes.string
}
