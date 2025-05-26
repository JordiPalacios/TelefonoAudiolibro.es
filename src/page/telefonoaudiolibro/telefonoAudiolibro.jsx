import { Section } from '../../components/shared/section'
import { HeaderTelefonoAudilibro } from './sections/headerTelefonoAudilibro'
import { MainSlider } from '../../components/shared/mainSlider'
import { useWorkingMode } from '../../assets/customHooks/useWorkingMode'

export const TelefonoAudiolibro = () => {
    const workingMode = useWorkingMode('Mobile')

    

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
                    speed={5000}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={10000}
                    />
                </Section>
                <Section as="section" className="bg-pink-300/80 py-10">
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
                </Section>
            </main>
        </>
    )
}
