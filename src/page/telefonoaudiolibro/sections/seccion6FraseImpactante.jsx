
export const Seccion6FraseImpactante = () => {
    return (
        <div className="relative w-full h-96 lg:h-[50rem] md:h-125 flex items-center justify-center shadow-2xl">
            <img 
            src="/img/telf22.webp" 
            alt="Fondo de la frase impactante" 
            loading="lazy"
            className="lg:hidden absolute inset-0 w-full h-full object-cover"
            />
            <img 
            src="/img/telf23.webp" 
            alt="Fondo de la frase impactante" 
            loading="lazy"
            className="hidden lg:block absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10">
                <p className="max-w-md md:max-w-3xl accent text-4xl md:text-6xl text-center text-lime-300/80 font-bold p-4">
                    TU BODA DURA 6 HORAS, ESTOS AUDIOS SON PARA <span className="text-lime-400">TODA LA VIDA</span>
                </p>
            </div>
            <div className="absolute inset-0 bg-black/40" />
        </div>
    )
}
