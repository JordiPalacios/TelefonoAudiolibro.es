
export const Seccion1Video = () => {
    return (
        <>
            <div>
                <h2>
                    ESTOS PRODRÍAIS SER VOSOTROS
                </h2>
                <p>
                    Reviviendo de nuevo la boda de el día siguiente.
                </p>
                <button className='mt-0 bg-lime-300 rounded-2xl border-1 border-black py-2 px-3.5 font-bold md:text-xl hover:scale-105 transition-transform duration-200'>
                    LO QUIERO EN MI BODA
                </button>
            </div>
            <video 
                src="/video/videoMobile.mov" 
                itemType='video/mov' 
                preload='metadata' 
                controls 
                controlsList='nodownload' 
                poster='/media/header/telf07.webp' 
                playsInline 
            />
        </>
    )
}
