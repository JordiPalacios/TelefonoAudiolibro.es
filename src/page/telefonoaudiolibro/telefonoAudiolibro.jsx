import { Section } from '../../components/shared/section'
import { HeaderTelefonoAudilibro } from './sections/headerTelefonoAudilibro'
import { InfiniteLoopSection, Reviews, SeccionAudios, SeccionDescripcionInvitados, SeccionFraseImpactante, SeccionGuia, SeccionPresentacion, SeccionProsContras, SeccionQueIncluye, SeccionVideo } from './sections'
import { Voice, WhatsApp } from '../../components'

export const TelefonoAudiolibro = () => {  

    return (
        <>
            <Section as="header" id='inicio' className="px-5 headerContainer">
                <HeaderTelefonoAudilibro />
            </Section>
            <main>                         
                <Section as="section" className='px-5 my-10'>
                    <SeccionPresentacion />
                </Section>
                <Section as="section" id='guia' className="px-5 bg-accent">
                    <SeccionGuia />
                </Section>
                <InfiniteLoopSection 
                equal={true} 
                />
                <Section as='section' id='queIncluye' className="px-5 my-10 text-center">
                    <SeccionQueIncluye />
                </Section>
                <Section as='section' id='descripcionInvitados' className="px-5 my-10 text-center bg-accent">
                    <SeccionDescripcionInvitados />
                </Section>
                <Voice 
                numPC="8"
                numTablet="4"
                numMobile="2"
                color="#c22f8e"
                />
                <Section as="section" id='audios' className="componentAnimation relative px-5 md:px-20 mb-5 flex flex-col lg:flex-row items-center justify-around xl:justify-center 2xl:justify-center gap-4 lg:gap-0 xl:gap-16 overflow-hidden">
                    <SeccionAudios />
                </Section>
                <Voice 
                numPC="8"
                numTablet="4"
                numMobile="2"
                color="#c22f8e"
                />
                <Section as="section" className="componentAnimation relative px-5 my-10 flex flex-col lg:flex-row items-center justify-between lg:justify-around text-center overflow-hidden">
                    <SeccionVideo />
                </Section>
                <InfiniteLoopSection 
                equal={true} 
                />
                <Section as="section" className="px-5 bg-accent">
                    <SeccionProsContras />
                </Section>
                <Section as="section">
                    <SeccionFraseImpactante />
                </Section>
                <Section as="section" id='opiniones' className="px-5 py-20 bg-accent-2">
                    <Reviews />
                </Section>
                <div className='w-full bg-white/10' style={{ height:"8px" }} />
                <WhatsApp className="contactFixed" msg="https://wa.me/34653781239?text=¡Quiero%20más%20información%20sobre%20VisualShow!" />
            </main>
        </>
    )
}
