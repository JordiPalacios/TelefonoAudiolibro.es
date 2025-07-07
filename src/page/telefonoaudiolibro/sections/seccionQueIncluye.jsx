import { CardIncluye } from "../../../components"

export const SeccionQueIncluye = () => {
    return (
        <>
            <h1 className="title title-font">¿Qué me incluye?</h1>
            <div className="flex flex-col lg:flex-row items-start justify-around gap-4 lg:gap-0 xl:gap-16 2xl:gap-20">
                <CardIncluye description="Entrega de Audios en 24h"/>
                <CardIncluye description="Instrucciones"/>
                <CardIncluye description="Entrega y Recogida"/>
            </div>
        </>
    )
}
