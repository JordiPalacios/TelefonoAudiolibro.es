
export const Seccion1Video = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">            
                <h2 className="title">
                    ESTOS PRODRÍAIS SER VOSOTROS
                </h2>
                <p className="font-semibold text-lg md:text-xl lg:text-2xl">
                    Reviviendo de <span className="text-pink-600/90 font-extrabold">nuevo</span> la boda, al día siguiente.
                </p>
                <button className='button hidden lg:block m-10'>
                    texto provisional
            </button>
            </div>           
            <video 
                src="/video/videoTelf02.mov" 
                itemType='video/mov' 
                preload='metadata' 
                controls 
                controlsList='nodownload' 
                poster='/video/poster/poster02.webp' 
                playsInline
                className={`m-5 lg:m-10 rounded-tl-4xl rounded-br-4xl max-w-3/4 md:max-w-xs object-cover`}
                />
            <a 
            href="https://book.stripe.com/bJebJ3gex0Kx4DjehEgA804"
            target="_blank"
            rel="noreferrer noopener"
            className="button self-center uppercase"
            >
                Reservar ahora
            </a>
        </>
    )
}
