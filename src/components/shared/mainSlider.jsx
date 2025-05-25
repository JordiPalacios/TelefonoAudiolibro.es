import { useEffect, useRef } from "react"
import FrasesData from '../../assets/mocks/frases.json'
import VideoData from '../../assets/mocks/video.json'
import Slider from "react-slick"
import { SliderMedia } from "./sliderMedia"


export const MainSlider = ({type, draggable, swipe, touchMove , dots, arrows, infinite, speed, slidesToShow, slidesToScroll, autoplay, autoplaySpeed }) => {
    let sliderData
    const sliderRef = useRef(null)

    switch (type) {
        case 'frases':
            sliderData = FrasesData
            break; 
        case 'videos':
            sliderData = VideoData
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
        }        
        

    useEffect(() =>{
        const handleVisibilityChange = () => {
            if (document.hidden) {
                sliderRef.current && sliderRef.current.slickPause();
            } else {
                sliderRef.current && sliderRef.current.slickPlay();
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [])

    const getSlideProps = (data) => {
        switch (type) {
            case 'frases':
                return {
                    frase: data.frase,
                    styleType: "frases",
                    typeMedia: "frases"
                }
            case 'videos':
                return {
                    url: data.url,
                    name: data.name,
                    poster: data.poster,
                    styleType: "videos",
                    typeMedia: "videos",
                }
            default:
                return {};
        }
    }

    return (
        <Slider ref={sliderRef} {...sliderSettings}>
            {sliderData.map((data) => (
                <SliderMedia 
                key={data.id}
                {...getSlideProps(data)}
                />
            ))}
        </Slider>
    )
}
