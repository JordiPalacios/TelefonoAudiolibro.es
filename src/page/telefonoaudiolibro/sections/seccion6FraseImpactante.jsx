
export const Seccion6FraseImpactante = () => {
    return (
        <div className="relative w-full h-96 md:h-125 flex items-center justify-center shadow-2xl">
            <img 
            src="/img/telf23.webp" 
            alt="Fondo de la frase impactante" 
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10">
                <p className="max-w-md md:max-w-3xl accent text-2xl md:text-4xl text-center text-white font-semibold p-4">
                    TU BODA DURA 6 HORAS, ESTOS AUDIOS SON PARA TODA LA VIDA
                </p>
            </div>
            <div className="absolute inset-0 bg-black/40" />
        </div>
    )
}
