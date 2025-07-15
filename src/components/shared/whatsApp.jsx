import PropTypes from 'prop-types'

export const WhatsApp = ({ msg, className="", label, colorText }) => {
    let content 

    if (className === "contactFixed") {
        content = 
        <div className="componentAnimation fixed mr-0 bottom-14 right-2 z-50 hover:scale-125 transition-transform duration-500">
            <a 
            href={msg} 
            target="_blank" 
            rel="noopener noreferrer"                
            aria-label='Enlace al WhatsApp de Telefonoaduiolibro.es para pedir información'
            >
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
        aria-label='Enlace al WhatsApp de Telefonoaduiolibro.es para pedir información'>
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
