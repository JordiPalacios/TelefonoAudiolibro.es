
export const Seccion1Video = () => {
    return (
        <>
            
            <h2 className="text-xl md:text-3xl lg:text-4xl font-serif font-bold mb-5">
                ESTOS PRODRÍAIS SER VOSOTROS
            </h2>
            <p className="font-bold text-lg md:text-xl lg:text-2xl">
                Reviviendo de nuevo la boda de el día siguiente.
            </p>
            <video 
                src="/video/videoTelf02.mov" 
                itemType='video/mov' 
                preload='metadata' 
                controls 
                controlsList='nodownload' 
                poster='/video/poster/poster02.webp' 
                playsInline 
                className="m-5 lg:m-10 rounded-tl-4xl rounded-br-4xl max-w-3/4 md:max-w-lg lg:max-w-xs object-cover shadow-2xl shadow-black/50"
            />
            <button className='mt-0 mb-5 bg-lime-200 rounded-2xl border-1 border-black py-2 px-3.5 font-bold md:text-xl hover:scale-105 transition-transform duration-200'>
                    LO QUIERO EN MI BODA
            </button>
        </>
    )
}
