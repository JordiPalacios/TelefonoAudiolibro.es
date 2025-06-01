
export const Seccion1Video = () => {
    return (
        <>
            <h2 className="title">
                ESTOS PRODRÍAIS SER VOSOTROS
            </h2>
            <p className="font-semibold text-lg md:text-xl lg:text-2xl">
                Reviviendo de <span className="text-pink-500 font-extrabold">nuevo</span> la boda de el día siguiente.
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
            <button className='button'>
                    LO QUIERO EN MI BODA
            </button>
        </>
    )
}
