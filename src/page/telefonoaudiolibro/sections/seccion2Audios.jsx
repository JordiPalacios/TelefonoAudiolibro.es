import { useViewInterseccion } from "../../../assets/customHooks"
import { MainSlider } from "../../../components/shared/mainSlider"

export const Seccion2Audios = () => {
    const [viewInterseccion, ref] = useViewInterseccion(0.10)
    
    return (
        <>
            <div 
            ref={ref}
            transition-style={
            viewInterseccion 
            ? "in:square:center"
            : ""
            }
            className= {`hidden lg:block w-1/2 transition-opacity duration-300 ${viewInterseccion ? "opacity-100" : "opacity-0"}`}>                
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
            <div className="flex flex-col items-center justify-center">
                <h2 className="title text-center lg:max-w-5xl">
                    NO TODO EL MUNDO TIENE LA VOZ DE SU ABUELA GUARDADA PARA SIEMPRE
                </h2>
                <p className="m-5 text-xl md:text-2xl text-pink-500 font-semibold underline-offset-4 underline decoration-dashed">
                    DALE AL PLAY
                </p>                        
                    <audio className="w-xs my-2" src="/audio/audio.mp4" controls controlsList="nodownload" />
                    <audio className="w-xs my-2" src="/audio/audio.mp4" controls controlsList="nodownload" />
                    <audio className="w-xs my-2" src="/audio/audio.mp4" controls controlsList="nodownload" />                
                <button className="button m-10">
                    texto provisional
                </button>
            </div>
        </>
    )
}
