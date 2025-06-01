import { Section } from '../../components/shared/section'
import { HeaderTelefonoAudilibro } from './sections/headerTelefonoAudilibro'
import { MainSlider } from '../../components/shared/mainSlider'
import { InfiniteLoopSection, Reviews, Seccion0Presentacion, Seccion1Video, Seccion2Audios, Seccion3Guia, Seccion4Conclusion, Seccion5ProsContras, Seccion6FraseImpactante } from './sections'
import { WhatsApp } from '../../components'

export const TelefonoAudiolibro = () => {  

    return (
        <>
            <Section as="header" className="px-10 headerContainer">
                <HeaderTelefonoAudilibro />
            </Section>
            <main>              
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
                <div className="lg:hidden w-full overflow-hidden leading-none mb-20">
                    <svg viewBox="0 0 1200 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-6">
                        <path
                        d="M0 8 Q 75 16 150 8 T 300 8 T 450 8 T 600 8 T 750 8 T 900 8 T 1050 8 T 1200 8"
                        stroke="#ff80c0"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        />
                    </svg>
                </div>
                <div className="hidden lg:block w-full overflow-hidden leading-none mb-20">
                    <svg viewBox="0 0 1200 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10">
                        <path
                        d="M0 8 Q 75 16 150 8 T 300 8 T 450 8 T 600 8 T 750 8 T 900 8 T 1050 8 T 1200 8"
                        stroke="#ff80c0"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        />
                    </svg>
                </div>
                <Section as="section" className='px-10 my-2 lg:my-20'>
                    <Seccion0Presentacion />
                </Section>
                <Section as="section" className="px-10 my-10 md:my-40 flex flex-col items-center justify-between text-center overflow-hidden">
                    <Seccion1Video />
                </Section>
                <InfiniteLoopSection 
                equal={true} 
                />
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
