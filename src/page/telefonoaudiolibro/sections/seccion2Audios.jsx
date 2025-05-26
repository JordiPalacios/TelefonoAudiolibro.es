import { MainSlider } from "../../../components/shared/mainSlider"

export const Seccion2Audios = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-6">
                <h2>
                    NO TODO EL MUNDO TIENE LA VOZ DE SU ABUELA GUARDADA PARA SIEMPRE
                </h2>
                <div className="flex items-start gap-6">
                    <aside className="flex-shrink-0">
                        <p className="text-lg font-bold rotate-[-90deg] origin-left whitespace-nowrap">
                            DALE AL PLAY
                        </p>
                    </aside>
                    <audio src="/audio/audio.mp4" controls />
                    <audio src="/audio/audio.mp4" controls />
                    <audio src="/audio/audio.mp4" controls />
                </div>
                
            </div>
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
        </>
    )
}
