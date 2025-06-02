import { MainSlider } from "../../../components/shared/mainSlider"
import { Voice } from "../../../components"
import { useWorkingMode } from "../../../assets/customHooks/useWorkingMode"

export const Seccion0Presentacion = () => {
    const workingMode = useWorkingMode('Mobile')

    return (
        <>
            <div className="text-center">
                <h2 className="title">                       
                    ¿QUÉ DARÍAS POR VOLVER A ESCUCHAR LA VOZ DE TU ABUELOS?
                </h2>
                <h3 className="subtitle text-pink-500 lg:max-w-3xl mx-auto">
                    Tener junta a TODA tu <span className="font-extrabold text-pink-500">familia y amigos</span> en un solo lugar, pasa poco
                </h3>
                <p className="mb-5">
                    Muuy poco, así que aprovecha tu boda para crear el mejor
                    recuerdo de tus personas favoritas.
                    <br />
                    <br />
                    Pero por favor... <span className="font-bold">No lo hagas con el típico libro de firmas</span> (muy aburrido).
                    <br />
                    <br />
                    Total, que necesitas un recuerdo original que sea también una <span className="accent text-pink-500 font-semibold">experiencia para todos.</span>
                    <br />
                    <span className="accent text-gray-700 font-bold">Uffffff “Pero esto me costará más que ir al Mercadona”</span>
                    <br />
                    <br />
                    Nada de eso, <span className="font-extrabold text-pink-500">no hace falta gastarse 5.000€ en robots
                    leds</span> ni pistolas de fuego para tener un recuerdo especial
                </p>
                <button className="button">
                    texto provisional
                </button>
            </div>
            <Voice 
            numPC="8"
            numTablet="4"
            numMobile="2"
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
