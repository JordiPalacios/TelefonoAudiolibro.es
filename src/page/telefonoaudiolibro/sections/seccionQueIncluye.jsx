import { ArrowDownLeft, ArrowDownRight, CardIncluye } from "../../../components"

export const SeccionQueIncluye = () => {
    return (
        <>
            <h1 className="title">
                <span className="title-font">¿Qué me </span><span className="text-pink-500 font-accent italic">incluye?</span>
            </h1>
            <div className="componentAnimation relative flex flex-row items-end justify-center w-full h-40 md:h-80 mt-25 mb-10 md:my-15">                
                <p className="italic font-bold text-lg md:text-xl lg:text-2xl tracking-tighter leading-tight absolute z-20 -ml-65 md:-ml-135 mb-60 w-20 text-center">
                    Espejo decorativo
                </p>
                <ArrowDownRight className="w-8 h-8 absolute z-20 -ml-70 md:-ml-135 mb-50 text-pink-500" />
                <img 
                src="/img/auxiliares/espejo.webp" 
                alt="espejo telefono audiolibro" 
                className="w-35 md:w-52 h-auto z-0 relative"/>
                <img 
                src="/img/auxiliares/telefono.webp" 
                alt="telefono audiolibro" 
                className="w-55 md:w-90 h-auto -ml-25 md:-ml-40 z-10 relative"/>
                <p className="italic font-bold text-lg md:text-xl lg:text-2xl tracking-tighter leading-tight absolute z-20 -mr-60 md:-mr-115 mb-35 md:mb-50 w-20 text-center">
                    Teléfono audiolibro
                </p>
                <ArrowDownLeft className="w-8 h-8 -scale-x-100 absolute z-20 -mr-65 md:-mr-115 mb-25 md:mb-40 text-pink-500" />

            </div>
            <div className="flex flex-col md:flex-row items-center justify-around md:justify-center gap-4 xl:gap-16 2xl:gap-20">
                <CardIncluye description="Entrega de Audios en 24h"/>
                <CardIncluye description="Instrucciones"/>
                <CardIncluye description="Entrega y Recogida"/>
            </div>
        </>
    )
}
