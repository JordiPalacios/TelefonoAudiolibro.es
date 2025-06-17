export const PagoRealizado = () => {
    return (
        <div className="pagoRealizado flex flex-col items-center justify-center h-screen">
            <h1 className="title text-center mb-5 text-pink-400">
                Gracias por confiar en telefonoaudiolibro.es
            </h1>
            <h2 className="subtitle text-center mb-5 text-pink-300 font-bold">
                ¡Nos vemos pronto creando los mejores recuerdos en tu <span className="text-lime-300">día más especial!</span>
            </h2>
            <p className="text-center mb-5 text-pink-200 font-semibold">
                Pronto recibirás un correo con la confirmación de tu reserva.
            </p>
            <button>
                <a 
                    href="https://telefonoaudiolibro.es"
                    rel="noreferrer noopener"
                    className="button self-center uppercase"
                >
                    Volver a la página principal
                </a>
            </button>
        </div>
    )
}
