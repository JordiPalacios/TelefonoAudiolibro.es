export const PagoRealizado = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center shadow-2xl">
            <img 
            src="/img/telf21.webp" 
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
            <div className="flex flex-col items-center justify-center h-screen z-10 relative mx-20">
                <h1 className="title text-center mb-5 text-white/90">
                    ¡RESERVA <span className="text-pink-500">CONFIRMADA</span>!
                </h1>
                <h2 className="subtitle text-center mb-5 text-white/90 font-bold">
                    Tu fecha se ha bloqueado correctamente ¡Os contactaremos por orden junto con el contrato de reserva!

                </h2>
                <p className="text-center text-white/90 font-semibold mb-10">
                    Gracias por confiar en <span className="text-pink-500 underline underline-offset-2">telefonoaudiolibro.es</span>
                </p>
                <a 
                    href="https://telefonoaudiolibro.es"
                    rel="noreferrer noopener"
                    className="button self-center uppercase"
                >
                    Volver a la página principal
                </a>
            </div>
            <div className="absolute inset-0 bg-black/70" />
        </div>
    )
}

