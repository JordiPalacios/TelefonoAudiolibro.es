
export const Seccion1Video = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">            
                <p className="title-main font-bold text-3xl md:text-6xl mt-5 md:mt-10 bg-white/30 py-3 px-3 -rotate-6 tracking-tighter">
                    ESTOS PRODRÍAIS
                </p>
                <p className="serif font-light italic text-4xl md:text-5xl text-pink-600/90 -mt-4 z-10 tracking-tighter">
                    ser vosotros
                </p>
                <p className="italic font-light text-lg md:text-xl lg:text-2xl mt-5 tracking-tighter leading-tight">
                    Reviviendo de <span className="text-pink-600/90 font-extrabold">nuevo</span> la boda, al día siguiente.
                </p>
                <p className="italic font-light text-lg md:text-xl lg:text-2xl mb-5 tracking-tighter leading-tight">
                    La boda se terminará... pero os queda escuchar <span className="text-pink-600/90 font-extrabold">todos los mensajes</span>.
                </p>
                <p className="italic font-light text-lg md:text-xl lg:text-2xl  tracking-tighter">
                    ¿Planazo, verdad?
                </p>
                <a 
                href="https://book.stripe.com/bJebJ3gex0Kx4DjehEgA804"
                target="_blank"
                rel="noreferrer noopener"
                className="hidden lg:block button m-10 self-center uppercase"
                >
                    Ya me lo dirás 🙃
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
                className={`m-5 lg:m-10 rounded-tl-4xl rounded-br-4xl max-w-3/4 md:max-w-xs object-cover`}
                />
            <a 
            href="https://book.stripe.com/bJebJ3gex0Kx4DjehEgA804"
            target="_blank"
            rel="noreferrer noopener"
            className="block lg:hidden button self-center uppercase"
            >
                Ya me lo dirás 🙃
            </a>
        </>
    )
}
