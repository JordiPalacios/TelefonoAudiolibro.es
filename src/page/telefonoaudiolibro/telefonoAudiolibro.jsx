import { Section } from '../../components/shared/section'
import { HeaderTelefonoAudilibro } from './sections/headerTelefonoAudilibro'

export const TelefonoAudiolibro = () => {
    return (
        <>
            <Section as="header" className="headerContainer">
                <HeaderTelefonoAudilibro />
            </Section>
            <main>                
                <Section as="section" className="bg-red-300">
                    <p>Hola</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"> Adios </button>
                    <h1 className="text-5xl font-bold">Hello</h1>
                </Section>
            </main>
        </>
    )
}
