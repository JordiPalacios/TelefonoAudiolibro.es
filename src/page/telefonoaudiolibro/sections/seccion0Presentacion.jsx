import { Voice } from "../../../components"
import { useWorkingMode } from "../../../assets/customHooks"
import { MainSlider } from "../../../components/shared/mainSlider"

export const Seccion0Presentacion = () => {
    const workingMode = useWorkingMode('Mobile')

    return (
        <>
            <div className="text-center mb-10">
                <h2 className="title-main text-3xl md:text-5xl font-extrabold mb-5 md:mb-10 xl:mb-15 2xl:mb-10">                       
                    ¿QUÉ DARÍAS POR VOLVER A ESCUCHAR LA VOZ DE TUS <span className="title-accent font-extrabold text-pink-500/90">ABUELOS</span>?
                </h2>
                <h3 className="subtitle text-pink-500/80 lg:max-w-3xl mx-auto">
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
                <button className="button m-10">
                    Ver disponibilidad
                </button>
            </div>
            <Voice 
            numPC="10"
            numTablet="4"
            numMobile="2"
            color="#f472b6"
            />               
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
        </>
    )
}
