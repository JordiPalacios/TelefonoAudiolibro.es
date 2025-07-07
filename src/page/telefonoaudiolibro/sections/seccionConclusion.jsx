
export const SeccionConclusion = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center overflow-hidden">
            <div className="lg:flex lg:flex-col lg:items-center lg:justify-between lg:text-center mb-5 lg:ml-50">
                <h2 className="title">
                    VALE, PERO...
                </h2>
                <h3 className="subtitle">
                    ¿ES FÁCIL DE USAR?
                </h3>
                <p className="font-extrabold text-xl md:text-2xl mb-2 md:mb-5 text-pink-500">
                    No podría serlo más ...
                </p>
                <p className="md:text-xl">
                    Pulsa un <span className="font-bold">sólo botón</span> y tus invitados ya podrán dejar sus mensajes al descolgar.
                </p>
                <p className="m-2 md:mb-10 font-extrabold lg:text-xl text-pink-500">
                    Quedarán grabados al colgar el teléfono. 
                </p>
                <table className="w-full lg:mb-5 border-separate border-spacing-2 md:border-spacing-4">
                    <thead>
                        <tr className="hidden md:table-row">
                            <th className="bg-white/50 p-3 rounded-lg shadow-md w-1/4 lg:text-xl text-center font-semibold" >Sin WIFI</th>
                            <th className="bg-white/50 p-3 rounded-lg shadow-md w-1/4 lg:text-xl text-center font-semibold" >Sin cables</th>
                            <th className="bg-white/50 p-3 rounded-lg shadow-md w-1/4 lg:text-xl text-center font-semibold" >13h de batería</th>
                            <th className="bg-white/50 p-3 rounded-lg shadow-md w-1/4 lg:text-xl text-center font-semibold" >Grabación ilimitada</th>
                        </tr>
                        <tr className="table-row mb-5 md:hidden">
                            <th className="bg-white/50 p-3 rounded-lg shadow-md w-1/2 text-center font-semibold" >Sin WIFI</th>
                            <th className="bg-white/50 p-3 rounded-lg shadow-md w-1/2 text-center font-semibold" >Sin cables</th>
                        </tr>
                        <tr className="table-row md:hidden">
                            <th className="bg-white/50 p-3 rounded-lg shadow-md w-1/2 text-center font-semibold" >13h de batería</th>
                            <th className="bg-white/50 p-3 rounded-lg shadow-md w-1/2 text-center font-semibold" >Grabación ilimitada</th>
                        </tr>
                    </thead>
                </table>
                <button className="button hidden lg:block">
                    COMPROBAR DISPINIBILIDAD
                </button>
            </div>
            <img src="/img/telf27.webp" alt="telefonoaudiolibro.es" className="max-w-xs rounded-xl lg:mr-50 object-cover" loading="lazy"/>
            <button className="button block lg:hidden">
                    COMPROBAR DISPONIBILIDAD
            </button>
        </div>
    )
}
