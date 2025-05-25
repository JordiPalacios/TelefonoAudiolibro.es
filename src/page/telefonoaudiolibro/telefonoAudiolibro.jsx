import { Section } from '../../components/shared/section'
import { HeaderTelefonoAudilibro } from './sections/headerTelefonoAudilibro'
import { MainSlider } from '../../components/shared/mainSlider'

export const TelefonoAudiolibro = () => {
    

    return (
        <>
            <Section as="header" className="headerContainer">
                <HeaderTelefonoAudilibro />
            </Section>
            <main>                
                <Section as="section" className="bg-gray-100">
                    <MainSlider
                    type="frases"
                    draggable={false}
                    swipe={false}
                    touchMove={false}
                    dots={false}
                    arrows={false}
                    infinite={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    speed={5000}
                    autoplaySpeed={10000}
                    />
                </Section>
                {/* AQUÍ ESTA EL PROBLEMA DEL PADDING O EL EXTRA DE ANCHO EN EL VÍDEO */}
                <Section as="section" className="bg-gray-900 p-2 m-0">
                    <MainSlider
                    type="videos"
                    draggable={true}
                    swipe={true}
                    touchMove={true}
                    dots={true}
                    arrows={true}
                    infinite={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={false}
                    speed={500}
                    />
                </Section>
            </main>
        </>
    )
}
