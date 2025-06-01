import { MainSlider } from "../../../components/shared/mainSlider"

export const Reviews = () => {
    return (
        <>
            <h3 className="title text-center mb-4 md:mb-10">
                OPINIONES
            </h3>
            <MainSlider 
                type="reviews"
                draggable={true}
                swipe={true}
                touchMove={true}
                dots={true}
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
