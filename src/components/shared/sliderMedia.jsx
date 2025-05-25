
import PropTypes from 'prop-types'

export const SliderMedia = ({styleType, typeMedia, url, name , poster, frase}) => {
      //Decido con la clase a trabajar en el slider
    let className

    switch (styleType) {
        case 'frases':
            className = 'frasesSlider'
            break;
        
        case 'imagenes':
            className = 'imgenesSlider'
            break;

        case 'videos':
            className = 'videosSlider'
            break;

        default:
            className = 'standardSlider'
            break;
    }

    return (
        
        <div className={className}>
            {typeMedia === 'frases' && (
                <p className='text-balance break-words text-lg lg:text-2xl text-center font-bold py-10 my-20'>
                    {frase}
                </p>
            )}
            {typeMedia === 'imagenes' && (
                <img src={url} alt={name} />
            )}
            {typeMedia === 'videos' && (
                <video 
                    src={url} 
                    alt={name} 
                    itemType='video/mov' 
                    preload='metadata' 
                    controls 
                    controlsList='nodownload' 
                    poster={poster}  
                    playsInline
                />
            )}
        </div>
        
    )

}

SliderMedia.propTypes = {
    styleType: PropTypes.string,
    typeMedia: PropTypes.oneOf(['frase', 'imagen', 'video']),
    url: PropTypes.string,
    name: PropTypes.string,
    poster: PropTypes.string,
    frase: PropTypes.string
}