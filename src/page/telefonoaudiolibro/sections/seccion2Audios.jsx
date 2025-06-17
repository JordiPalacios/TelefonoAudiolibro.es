import { MainSlider } from "../../../components/shared/mainSlider"

export const Seccion2Audios = () => {
    
    return (
        <>      
            <img 
            src="/img/auxiliares/bolaDiscoteca.webp" 
            alt="telefono audiolibro guia" 
            className="componentAnimation block max-w-40 md:max-w-60 lg:max-w-xs object-cover absolute top-0 -left-7.5 md:-left-10 lg:-left-1/24 xl:-left-10 2xl:left-0"
            />
            <div className="hidden mt-10 py-10 lg:block w-1/2 h-full">
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
            <div className="flex flex-col items-center justify-center mt-10 z-10">
                <h2 className="title text-center max-w-75 md:max-w-xl lg:max-w-5xl">
                    NO TODO EL MUNDO TIENE LA VOZ DE SU <span className="title-accent font-extrabold text-pink-500/90">ABUELA</span> GUARDADA PARA SIEMPRE
                </h2>
                <p className="mb-5 text-xl md:text-2xl text-pink-500 font-semibold underline-offset-4 underline decoration-dashed">
                    DALE AL PLAY
                </p>                        
                    <audio className="w-xs my-2" src="/audio/audio.mp4" controls controlsList="nodownload" />
                    <audio className="w-xs my-2" src="/audio/audio.mp4" controls controlsList="nodownload" />
                    <audio className="w-xs my-2" src="/audio/audio.mp4" controls controlsList="nodownload" />                
                <button className="button m-10">
                    Lo quiero en mi boda
                </button>
            </div>
        </>
    )
}
