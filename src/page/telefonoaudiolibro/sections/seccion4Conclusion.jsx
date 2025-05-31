
export const Seccion4Conclusion = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between text-center overflow-hidden gap-4">
            <div>
                <h2 className="font-bold font-serif text-3xl mb-2">
                    VALE, PERO...
                </h2>
                <h3 className="font-bold font-serif text-2xl mb-2">
                    ¿ES FÁCIL DE USAR?
                </h3>
                <p className="font-bold text-xl mb-10">
                    No podría serlo más
                </p>
                <p>
                    Pulsa un solo botón y tus invitados ya podrán dejar sus mensajes al descolgar.
                </p>
                <p className="mb-10 lg:mb-30">
                    Y quedarán grabados al colgar el teléfono. 
                </p>
                <table className="w-full mb-5">
                    <thead>
                        <tr className="flex flex-row justify-between">
                            <th className="bg-white/50 p-3 rounded-lg shadow-md" >Sin WIFI</th>
                            <th className="bg-white/50 p-3 rounded-lg shadow-md" >Sin cables</th>
                            <th className="bg-white/50 p-3 rounded-lg shadow-md" >13h de batería</th>
                            <th className="bg-white/50 p-3 rounded-lg shadow-md" >Grabación ilimitada</th>
                        </tr>
                    </thead>
                </table>
                <button className="hidden lg:block mt-0 bg-lime-200 rounded-2xl border-1 border-black py-2 px-3.5 font-bold md:text-xl hover:scale-105 transition-transform duration-200">
                    COMPROBAR DISPINIBILIDAD
                </button>
            </div>
            <img src="/img/telf28.webp" alt="telefonoaudiolibro.es" className="max-w-50 md:max-w-xs rounded-xl" loading="lazy"/>
            <button className="block lg:hidden m-0 bg-lime-200 rounded-2xl border-1 border-black py-2 px-3.5 font-bold md:text-xl hover:scale-105 transition-transform duration-200">
                    COMPROBAR DISPINIBILIDAD
            </button>
        </div>
    )
}
