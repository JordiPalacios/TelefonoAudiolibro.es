
export const Seccion1Video = () => {
    return (
        <>
            <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-start pt-5">
                <h2 className="text-3xl font-serif font-bold mb-10">
                    ESTOS PRODRÍAIS SER VOSOTROS
                </h2>
                <p className="font-bold mb-5 text-lg lg:text-xl">
                    Reviviendo de nuevo la boda de el día siguiente.
                </p>
                <button className='hidden lg:block mt-0 bg-lime-300 rounded-2xl border-1 border-black py-2 px-3.5 font-bold md:text-xl hover:scale-105 transition-transform duration-200'>
                    LO QUIERO EN MI BODA
                </button>
            </div>
            <video 
                className="mb-5 rounded-2xl md:max-w-lg lg:max-w-7xl object-cover"
                src="/video/videoMobile.mov" 
                itemType='video/mov' 
                preload='metadata' 
                controls 
                controlsList='nodownload' 
                poster='/media/header/telf07.webp' 
                playsInline 
            />
            <button className='block lg:hidden mt-0 bg-lime-300 rounded-2xl border-1 border-black py-2 px-3.5 font-bold md:text-xl hover:scale-105 transition-transform duration-200'>
                    LO QUIERO EN MI BODA
                </button>
        </>
    )
}
