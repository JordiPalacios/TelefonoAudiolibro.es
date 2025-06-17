import { Section } from '../../components/shared/section'
import { HeaderTelefonoAudilibro } from './sections/headerTelefonoAudilibro'
import { MainSlider } from '../../components/shared/mainSlider'
import { InfiniteLoopSection, Reviews, Seccion0Presentacion, Seccion1Video, Seccion2Audios, Seccion3Guia, Seccion4Conclusion, Seccion5ProsContras, Seccion6FraseImpactante } from './sections'
import { Voice, WhatsApp } from '../../components'

export const TelefonoAudiolibro = () => {  

    return (
        <>
            <Section as="header" className="px-10 headerContainer">
                <HeaderTelefonoAudilibro />
            </Section>
            <main>         
                {/* ***************************************************************************** */}
                {/* De momento se oculta porque no lo usamos, si al final no se usa lo borro      */}
                <Section as="section" className='hidden px-10 my-25'>
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
                {/* ***************************************************************************** */}
                <Section as="section" className='px-10 my-10'>
                    <Seccion0Presentacion />
                </Section>
                <Section as="section" id='guia' className="px-10 bg-accent">
                    <Seccion3Guia />
                </Section>
                <InfiniteLoopSection 
                equal={true} 
                />
                <Section as="section" id='audios' className="componentAnimation relative px-10 md:px-20 mb-10 flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-0 text-center overflow-hidden">
                    <Seccion2Audios />
                </Section>
                <Voice 
                numPC="8"
                numTablet="4"
                numMobile="2"
                color="#c22f8e"
                />
                <Section as="section" className="relative px-10 my-10 flex flex-col lg:flex-row items-center justify-between lg:justify-around text-center overflow-hidden">
                    <Seccion1Video />
                </Section>
                <InfiniteLoopSection 
                equal={true} 
                />
                {/* ***************************************************************************** */}
                {/* De momento se oculta porque no lo usamos, si al final no se usa lo borro      */}
                <Section as="section" className="hidden px-10 my-10">
                    <Seccion4Conclusion />
                </Section>
                {/* ***************************************************************************** */}
                <Section as="section" className="px-10 bg-accent">
                    <Seccion5ProsContras />
                </Section>
                <Section as="section">
                    <Seccion6FraseImpactante />
                </Section>
                <Section as="section" id='opiniones' className="px-10 py-20 bg-accent-2 xl:py-60">
                    <Reviews />
                </Section>
                <div className='w-full bg-white/10' style={{ height:"8px" }} />
                <WhatsApp className="contactFixed" msg="https://wa.me/34653781239?text=¡Quiero%20más%20información%20sobre%20VisualShow!" />
            </main>
        </>
    )
}
