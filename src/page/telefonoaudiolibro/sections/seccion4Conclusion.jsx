
export const Seccion4Conclusion = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center overflow-hidden">
            <div className="lg:flex lg:flex-col lg:items-center lg:justify-between lg:text-center mb-5 lg:ml-50">
                <h2 className="font-bold font-serif text-3xl md:text-4xl mb-4">
                    VALE, PERO...
                </h2>
                <h3 className="font-bold font-serif text-2xl md:text-3xl mb-1">
                    ¿ES FÁCIL DE USAR?
                </h3>
                <p className="font-bold text-xl md:text-2xl mb-10">
                    No podría serlo más ...
                </p>
                <p className="md:text-xl">
                    Pulsa un solo botón y tus invitados ya podrán dejar sus mensajes al descolgar.
                </p>
                <p className="mb-5 md:mb-10 font-semibold lg:text-xl">
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
                <button className="hidden lg:block mb-5 bg-lime-200 rounded-2xl border-1 border-black py-2 px-3.5 font-bold md:text-xl hover:scale-105 transition-transform duration-500">
                    COMPROBAR DISPINIBILIDAD
                </button>
            </div>
            <img src="/img/telf27.webp" alt="telefonoaudiolibro.es" className="max-w-xs rounded-xl lg:mr-50 object-cover" loading="lazy"/>
            <button className="block lg:hidden mb-5 bg-lime-200 rounded-2xl border-1 border-black py-2 px-3.5 font-bold md:text-xl hover:scale-105 transition-transform duration-500">
                    COMPROBAR DISPINIBILIDAD
            </button>
        </div>
    )
}
