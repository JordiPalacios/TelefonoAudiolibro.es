
import PropTypes from 'prop-types'

export const SliderMedia = ({typeMedia, url, name , poster, frase}) => {
      //Decido con la clase a trabajar en el slider
    let className

    switch (typeMedia) {
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
                <p className='text-balance break-words text-lg lg:text-2xl text-center font-bold py-30'>
                    {frase}
                </p>
            )}
            {typeMedia === 'imagenes' && (
                <img src={url} alt={name} className='aspect-[3/4] max-w-full h-auto object-cover rounded-2xl py-4' />
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
                    className='w-full h-auto md:max-w-lg lg:max-w-xl object-cover rounded-2xl '
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