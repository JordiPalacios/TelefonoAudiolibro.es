import { Voice } from "../../../components"
import { useWorkingMode } from "../../../assets/customHooks"
import { MainSlider } from "../../../components/shared/mainSlider"

export const SeccionPresentacion = () => {
    const workingMode = useWorkingMode('Mobile')

    return (
        <>
            <div className="text-center mb-10">
                <h2 className="title-font title-small font-extrabold lg:px-10">                       
                    ¿QUÉ DARÍAS POR VOLVER A ESCUCHAR LA VOZ DE TUS ABUELOS ?
                </h2>
                <h3 className="subtitle text-pink-500/80 lg:max-w-3xl mx-auto underline underline-offset-2 decoration-dotted">
                    Tener junta a <span className="font-extrabold text-pink-500">TODA</span> tu <span className="font-extrabold text-pink-500">familia y amigos</span> en un solo lugar, pasa poco
                </h3>
                <p className="mb-10">
                    Muuy poco, así que aprovecha tu boda para crear el mejor
                    recuerdo de tus personas favoritas.
                    <br />
                    <br />
                    Pero por favor... <span className="font-bold">No lo hagas con el típico libro de firmas</span> (muy aburrido).
                    <br />
                    <br />
                    Total, que necesitas un recuerdo original que sea también una <span className="text-pink-500 font-semibold">experiencia para todos.</span>
                    <br />
                    <br />
                    <span className="accent text-lg md:text-xl text-gray-700 font-extrabold">Uffffff “Pero esto me costará más que ir al Mercadona”</span>
                    <br />
                    <br />
                    Nada de eso, <span className="font-extrabold text-pink-500">no hace falta gastarse 5.000€ en robots
                    leds</span> ni pistolas de fuego para tener un recuerdo especial
                </p>
                <a
                    href="https://wa.me/message/2RM67GODIWVUE1"
                    className="button self-center inline-block uppercase mb-10 hover:scale-105 transition-transform duration-500"
                    target="_blank"
                    rel="noreferrer noopener"
                    >
                    Ver disponibilidad
                </a>
            </div>
            <Voice 
            numPC="10"
            numTablet="4"
            numMobile="2"
            color="#f472b6"
            />      
            <div className="block lg:hidden px-5">
                <MainSlider
                type="videos"
                draggable={true}
                swipe={true}
                touchMove={true}
                dots={false}
                arrows={true}
                infinite={true}
                speed={500}
                {...(workingMode === "PC" 
                    ? {slidesToShow: 3} 
                    : {slidesToShow: 1}
                )}
                slidesToScroll={1}
                autoplay={false}
                autoplaySpeed={0}
                />
            </div>  
            <div className="componentAnimation hidden lg:flex flex-row items-center justify-center my-20 gap-4 xl:gap-15 2xl:gap-30 overflow-hidden">
                <video 
                src="/video/videoTelf07.mov"
                itemType='video/mov' 
                preload='metadata' 
                controls 
                controlsList='nodownload' 
                poster='/video/poster/posterPresentacion03.webp'
                playsInline
                className='max-w-75 xl:max-w-sm 3xl:max-w-sm rounded-2xl'
                />
                <video 
                src="/video/videoTelf06.mov"
                itemType='video/mov' 
                preload='metadata' 
                controls 
                controlsList='nodownload' 
                poster='/video/poster/posterPresentacion01.webp'
                playsInline
                className='max-w-75 xl:max-w-sm 3xl:max-w-lg rounded-2xl'
                />
                <video 
                src="/video/videoTelf04.mov"
                itemType='video/mov' 
                preload='metadata' 
                controls 
                controlsList='nodownload' 
                poster='/video/poster/posterPresentacion02.webp'
                playsInline
                className='max-w-75 xl:max-w-sm 3xl:max-w-lg rounded-2xl'
                />
            </div>       
        </>
    )
}
