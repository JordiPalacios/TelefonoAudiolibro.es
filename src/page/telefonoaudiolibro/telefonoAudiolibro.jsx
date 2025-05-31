import { Section } from '../../components/shared/section'
import { HeaderTelefonoAudilibro } from './sections/headerTelefonoAudilibro'
import { MainSlider } from '../../components/shared/mainSlider'
import { useWorkingMode } from '../../assets/customHooks/useWorkingMode'
import { Reviews, Seccion1Video, Seccion2Audios, Seccion3Guia, Seccion4Conclusion, Seccion5ProsContras, Seccion6FraseImpactante } from './sections'
import { WhatsApp } from '../../components'

export const TelefonoAudiolibro = () => {
    const workingMode = useWorkingMode('Mobile')

    

    return (
        <>
            <Section as="header" className="px-10 headerContainer">
                <HeaderTelefonoAudilibro />
            </Section>
            <main>              
                <div className='w-full bg-gray-300' style={{ height:"8px" }} />
                <Section as="section" className='px-10 my-25'>
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
                    autoplaySpeed={7500}
                    />
                </Section>
                <div className='w-full bg-gray-300' style={{ height:"8px" }} />
                <Section as="section" className='px-10 my-2 lg:my-20'>
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
                <div className='w-full bg-gray-300' style={{ height:"8px" }} />
                <Section as="section" className="px-10 my-10 md:my-40 flex flex-col items-center justify-between text-center overflow-hidden">
                    <Seccion1Video />
                </Section>
                <Section as="section" className="px-10 md:px-20 my-30 flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-0 text-center overflow-hidden">
                    <Seccion2Audios />
                </Section>
                <Section as="section" className="px-10 my-30 md:my-60">
                    <Seccion3Guia />
                </Section>
                <Section as="section" className="px-10 my-30 md:my-80">
                    <Seccion4Conclusion />
                </Section>
                <Section as="section" className="px-10 mb-60">
                    <Seccion5ProsContras />
                </Section>
                <Section as="section" className="my-30 md:my-80">
                    <Seccion6FraseImpactante />
                </Section>
                <Section as="section" className="px-10 my-70 md:my-90">
                    <Reviews />
                </Section>
                <div className='w-full bg-white/40' style={{ height:"8px" }} />
                <WhatsApp className="contactFixed" msg="https://wa.me/34653781239?text=¡Quiero%20más%20información%20sobre%20VisualShow!" />
            </main>
        </>
    )
}
