import { MainSlider } from "../../../components/shared/mainSlider"

export const Reviews = () => {
    return (
        <>
            <div className="felx flex-col items-center justify-center text-center mb-10">
                <p className="text-3xl md:text-6xl font-extrabold text-yellow-500 -rotate-4 leading-tight tracking-tighter">
                    ★★★★★
                </p>
                <p className="title-main text-4xl md:text-6xl font-extrabold -mt-3 leading-tight tracking-tighter">
                    valoraciones
                </p>
                <p className="tinos italic text-6xl md:text-8xl -mt-5 font-extrabold leading-tight tracking-tighter">
                    REALES
                </p>
                <small className="serif italic text-lg md:text-xl lg:text-2xl text-pink-600 tracking-tighter">
                    Esto es lo que dicen de nosotros algunas parejas
                </small>
            </div>
            <MainSlider 
                type="reviews"
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
