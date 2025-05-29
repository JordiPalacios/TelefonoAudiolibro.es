import { Section } from '../../components/shared/section'
import { HeaderTelefonoAudilibro } from './sections/headerTelefonoAudilibro'
import { MainSlider } from '../../components/shared/mainSlider'
import { useWorkingMode } from '../../assets/customHooks/useWorkingMode'
import { Seccion1Video, Seccion2Audios, Seccion3Guia, Seccion4Conclusion, Seccion5ProsContras } from './sections'

export const TelefonoAudiolibro = () => {
    const workingMode = useWorkingMode('Mobile')

    

    return (
        <>
            <Section as="header" className="headerContainer">
                <HeaderTelefonoAudilibro />
            </Section>
            <main>              
                <div className='w-full bg-gray-300' style={{ height:"8px" }}></div>
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
                <div className='w-full bg-gray-300' style={{ height:"8px" }}></div>
                <Section as="section" className="bg-gray-100 py-10">
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
                <Section as="section" className="bg-pink-500/50 flex flex-col lg:flex-row gap-4 items-start justify-between text-start overflow-hidden">
                    <Seccion1Video />
                </Section>
                <Section as="section" className="bg-gray-100">
                    <Seccion2Audios />
                </Section>
                <Section as="section" className="bg-pink-300 my-10">
                    <Seccion3Guia />
                </Section>
                <Section as="section" className="bg-gray-100">
                    <Seccion4Conclusion />
                </Section>
                <Section as="section" className="bg-pink-300">
                    <Seccion5ProsContras />
                </Section>
            </main>
        </>
    )
}
