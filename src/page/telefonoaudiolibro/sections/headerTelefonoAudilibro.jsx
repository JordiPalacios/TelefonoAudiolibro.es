
export const HeaderTelefonoAudilibro = () => {
    return (
        <>       
            <section className="headerDescription flex flex-col gap-y-12">
                <div>                    
                    <h1 className="font-serif font-bold text-white text-3xl my-2 md:text-6xl">
                        ESCUCHA Y GUARDA PARA SIEMPRE LA VOZ DE TUS INVITADOS
                    </h1>
                    <p className="text-white md:text-xl xl:text-2xl">Cada día no se tiene a toda la familia y amigos juntos.</p>
                    <p className="text-white md:text-xl xl:text-2xl">Aprovecha para que todos te dejen sus mensajes</p>
                </div>
                <div>
                    <button className="mt-0 bg-lime-300 rounded-2xl border-1 border-black py-2 px-3.5 font-bold md:text-xl hover:scale-105 transition-transform duration-200"> 
                        ENVIAR SOLICITUD 
                    </button>
                    <p className="font-bold text-white md:text-xl xl:text-xl">El 99% de las personas que no lo tienen en su boda se arrepienten...</p>
                </div>
            </section>
            {/* Importar el hook useWorkingMode de otro proyecto para seleccionar que imagen pongo o hacerlo con un class personalizado      */}
            {/* <img src="./public/media/header/telf04.webp" alt="telefonoaudiolibro.es"/> */}
            <img src="./public/media/header/telf07.webp" alt="telefonoaudiolibro.es"/>
        </>
    )
}
