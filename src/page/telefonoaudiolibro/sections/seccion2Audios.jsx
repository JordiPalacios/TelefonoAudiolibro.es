import { MainSlider } from "../../../components/shared/mainSlider"

export const Seccion2Audios = () => {
    return (
        <>
            <div className="flex flex-col items-stretch justify-center">
                <h2 className="text-center text-xl font-bold font-serif">
                    NO TODO EL MUNDO TIENE LA VOZ DE SU ABUELA GUARDADA PARA SIEMPRE
                </h2>
                <p className="m-5 text-lg font-semibold">
                    DALE AL PLAY
                </p>                        
                    <audio className="w-xs my-2" src="/audio/audio.mp4" controls controlsList="nodownload" />
                    <audio className="w-xs my-2" src="/audio/audio.mp4" controls controlsList="nodownload" />
                    <audio className="w-xs my-2" src="/audio/audio.mp4" controls controlsList="nodownload" />                
            </div>
            <div className= "hidden lg:block">                
                <MainSlider
                    type="imagenes"
                    draggable={true}
                    swipe={true}
                    touchMove={true}
                    dots={false}
                    arrows={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={false}
                    autoplaySpeed={0}
                />
            </div>
        </>
    )
}
