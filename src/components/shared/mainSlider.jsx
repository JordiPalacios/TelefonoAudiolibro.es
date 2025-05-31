import { useEffect, useRef } from "react"
import FrasesData from '../../assets/mocks/frases.json'
import VideoData from '../../assets/mocks/video.json'
import ImagenesData from '../../assets/mocks/imagenes.json'
import ReviewsData from '../../assets/mocks/reviews.json'
import Slider from "react-slick"
import { SliderMedia } from "./sliderMedia"


export const MainSlider = ({type, draggable, swipe, touchMove , dots, arrows, infinite, speed, slidesToShow, slidesToScroll, autoplay, autoplaySpeed }) => {
    let sliderData
    const sliderRef = useRef(null)
    const isVideo = type === 'videos'

    switch (type) {
        case 'frases':
            sliderData = FrasesData
            break; 
        case 'videos':
            sliderData = VideoData
            break;
        case 'imagenes':
            sliderData = ImagenesData
            break;
        case 'reviews':
            sliderData = ReviewsData
            break;
        default:
            sliderData = []
            break;
    }

    const sliderSettings = 
        {
            draggable,
            swipe,
            touchMove,
            dots,
            arrows,
            infinite,
            slidesToShow,
            slidesToScroll,
            autoplay,
            speed,
            autoplaySpeed,
            cssEase: 'ease',
            ...(isVideo && 
                {
                    afterChange: () => {
                        // Pausa todos los videos antes de cambiar de slide
                        const videos = document.querySelectorAll('video');
                        videos.forEach((video) => {
                            video.pause();
                        })
                    }
                }
            )
        }        
        

    useEffect(() =>{
        const handleVisibilityChange = () => {
            if (document.hidden) {
                sliderRef.current && sliderRef.current.slickPause();
            } else {
                if (autoplay) {
                    sliderRef.current && sliderRef.current.slickPlay();
                }
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [autoplay])

    const getSlideProps = (data) => {
        switch (type) {
            case 'frases':
                return {
                    frase: data.frase,
                    typeMedia: type
                }
            case 'videos':
                return {
                    url: data.url,
                    name: data.name,
                    poster: data.poster,
                    typeMedia: type,
                }
            case 'imagenes':
                return {
                    url: data.url,
                    name: data.name,
                    typeMedia: type,
                }
            case 'reviews':
                return {
                    stars: data.stars,
                    name: data.nombre,
                    description: data.descripcion,
                    typeMedia: type
                }
            default:
                return {};
        }
    }

    return (
        <Slider ref={sliderRef} {...sliderSettings} 
        className={`max-w-full mx-auto
        ${type === 'frases' 
            ? '' 
            : type === 'imagenes'
            ? ''
            : type === 'videos'
            ? ''
            : type === 'reviews'
            ? 'bg-white/20 shadow-md rounded-xl '
            : ''
        }
        `}>
            {sliderData.map((data) => (
                <SliderMedia 
                key={data.id}
                {...getSlideProps(data)}
                />
            ))}
        </Slider>
    )
}
