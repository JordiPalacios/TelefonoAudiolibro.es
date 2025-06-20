
import PropTypes from 'prop-types'
import { VerifiedIcon } from '../icons/verifiedIcon';

export const SliderMedia = ({typeMedia, url, name , poster, frase, stars, description, fotosDescripcion, date}) => {
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
                <div className='flex flex-col justify-between text-balance gap-4 tracking-tighter leading-tight'>
                    <div className='flex flex-row items-center justify-start pt-5 pl-5 gap-5 md:gap-10'>   
                        <img 
                        src={url} 
                        alt={name} 
                        loading='lazy'
                        className='max-w-15 rounded-full object-cover aspect-[3/4]'
                        /> 
                        <div className='flex flex-col items-start justify-center'>
                            <h4 className='text-xl md:text-3xl font-bold'>
                                {stars}
                            </h4>
                            <p className='text-lg md:text-2xl font-bold'>
                                {name}
                            </p>
                            <span>
                                <small className='font-semibold italic text-xs md:text-lg text-gray-900/80'>                            
                                    {date}
                                </small>
                            </span>
                        </div>                    
                    </div>
                    <p className='text-start text-lg md:text-2xl px-5 mb-2 flex-grow h-25'>
                        {description}
                    </p>
                    <div className='flex flex-row items-center justify-start gap-2 md:gap-4 px-5'>
                        {fotosDescripcion.map((foto) => (
                            <img 
                            src={foto.url} 
                            alt={foto.alt} 
                            loading='lazy'
                            className='max-w-15 rounded-full object-cover aspect-[3/4]'
                            />
                        ))}
                    </div>
                    <div className='flex flex-row justify-start items-center gap-1 pb-5 pl-5'>                            
                        <VerifiedIcon className='w-5 h-5 md:w-8 md:h-8 text-pink-400/80' />
                        <span className='font-sans text-xs text-black/40'>
                            Opinión verificada
                        </span>
                    </div>
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