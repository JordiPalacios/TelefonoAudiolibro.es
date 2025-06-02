
import PropTypes from 'prop-types'

export const SliderMedia = ({typeMedia, url, name , poster, frase, stars, description, date}) => {
      //Decido con la clase a trabajar en el slider
    let className

    switch (typeMedia) {
        case 'frases':
            className = 'frasesSlider'
            break;
        
        case 'imagenes':
            className = 'imagenesSlider'
            break;

        case 'videos':
            className = 'videosSlider'
            break;

        case 'reviews':
            className = 'reviewsSlider'
            break;

        default:
            className = 'standardSlider'
            break;
    }

    return (
        
        <div className={className}>
            {typeMedia === 'frases' && (
                <p className='text-balance break-words text-lg md:text-2xl text-center font-bold py-30'>
                    {frase}
                </p>
            )}
            {typeMedia === 'imagenes' && (
                <img 
                src={url} 
                alt={name} 
                loading='lazy'
                className='w-full h-auto md:max-w-lg lg:max-w-lg object-cover rounded-t-full aspect-[3/4]'
                />
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
                    className='w-full h-auto md:max-w-lg lg:max-w-xl object-cover rounded-2xl aspect-[3/4]'
                />
            )}
            {typeMedia === 'reviews' && (
                <div className='flex flex-col items-center h-72 text-balance justify-center gap-4'>
                    <div className='flex flex-row items-center justify-center gap-3 md:gap-6'>                        
                        <h4 className='text-xl md:text-3xl font-bold'>
                            {stars}
                        </h4>
                        <span>
                            <small>                            
                                {date}
                            </small>
                        </span>
                    </div>
                    <p className='text-lg md:text-2xl px-5 py-10'>
                        {description}
                    </p>
                    <p className='text-lg md:text-2xl font-bold'>
                        {name}
                    </p>
                </div>
            )}
        </div>
        
    )

}

SliderMedia.propTypes = {
    styleType: PropTypes.string,
    typeMedia: PropTypes.oneOf(['frases', 'imagenes', 'videos', 'reviews']),
    stars: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    name: PropTypes.string,
    poster: PropTypes.string,
    frase: PropTypes.string
}