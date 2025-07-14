import { InfiniteLoop } from "../../../components"

export const InfiniteLoopSection = ({ equal }) => {
    const logosData = ''
return (
    <section>
        <div className='logo'>
            {equal
                ? (
                <InfiniteLoop
                urlImg="/img/logoTelefonoAudiolibro.webp"
                nameImg="logo telefonoaudiolibro.es"
                equal={true}
                />
                ) : (
                <InfiniteLoop
                    logosData={[...logosData, ...logosData, ...logosData]} // repite el array 3 veces
                    equal={false}
                />
                )
            }
        </div>
    </section>
)
}
