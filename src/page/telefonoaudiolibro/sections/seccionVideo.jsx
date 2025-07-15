
export const SeccionVideo = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">            
                <p className="title-main title-small font-extrabold mt-5 md:mt-10 lg:mt-5 py-3 px-3 bg-white/30 -rotate-6">
                    ESTOS PRODRÍAIS
                </p>
                <p className="title-small italic text-pink-600/90 -mt-10 md:-mt-16 lg:-mt-18 xl:-mt-22 2xl:-mt-18 z-10">
                    ser vosotros
                </p>
                <p className="italic font-semibold text-lg md:text-xl lg:text-2xl tracking-tighter leading-tight">
                    Reviviendo de <span className="text-pink-600/90 font-extrabold">nuevo</span> la boda, al día siguiente.
                </p>
                <p className="italic font-light text-lg md:text-xl lg:text-2xl mb-5 tracking-tighter leading-tight">
                    La boda se terminará... pero os queda escuchar <span className="text-pink-600/90 font-extrabold">todos los mensajes</span>.
                </p>
                <p className="italic font-light text-lg md:text-xl lg:text-2xl mb-5 tracking-tighter">
                    ¿Planazo, verdad?
                </p>
                <a 
                href="https://book.stripe.com/bJebJ3gex0Kx4DjehEgA804"
                target="_blank"
                rel="noreferrer noopener"
                className="hidden lg:inline-block button m-10 self-center uppercase"
                >
                    Lo quiero en mi boda
                </a>
            </div>           
            <video 
                src="/video/videoTelf02.mov" 
                itemType='video/mov' 
                preload='metadata' 
                controls 
                controlsList='nodownload' 
                poster='/video/poster/poster02.webp' 
                playsInline
                className={`m-5 lg:m-10 rounded-tl-4xl rounded-br-4xl max-w-3/4 md:max-w-xs`}
            />
            <a 
            href="https://book.stripe.com/bJebJ3gex0Kx4DjehEgA804"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block lg:hidden button self-center uppercase"
            >
                Lo quiero en mi boda
            </a>
        </>
    )
}
