export const SeccionAudios = () => {
    
    return (
        <>      
            <img 
            src="/img/auxiliares/bolaDiscoteca.webp" 
            alt="telefono audiolibro guia" 
            className="block 2xl:px-5 max-w-40 md:max-w-60 xl:max-w-70 object-cover absolute top-0 -left-7.5 md:-left-10 lg:-left-1/24 xl:-left-10 2xl:left-100"
            />
            <div className="hidden lg:block pl-20">
                {/* <MainSlider
                    type="imagenes"
                    draggable={true}
                    swipe={true}
                    touchMove={true}
                    dots={false}
                    arrows={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={false}
                    autoplaySpeed={0}
                    /> */}
                <video 
                    src="/video/videoTelf00.mov" 
                    itemType='video/mov' 
                    preload='metadata' 
                    controls 
                    controlsList='nodownload' 
                    poster='/video/poster/poster00.webp' 
                    playsInline
                    className="rounded-2xl md:max-w-xs"
                />
            </div>
            <div className="flex flex-col items-center justify-center text-cente mt-10 z-10">
                <span className="title title-font tracking-tighter"> guarda </span>
                <p className="title-small rotate-2 r max-w-75 md:max-w-xl lg:max-w-5xl -mt-6 lg:-mt-14 xl:-mt-20 2xl:-mt-14">
                    la voz
                </p>
                <p className="title title-font -mt-8 lg:-mt-16 xl:-mt-22 2xl:-mt-16">
                    de tu <span className="title-accent font-extrabold text-pink-500/90">ABUELA</span>
                </p>
                <small className="title-font font-bold text-lg md:text-xl lg:text-2xl text-pink-700 mb-6 -mt-6 lg:-mt-14 xl:-mt-20 2xl:-mt-14 tracking-tighter">para siempre.</small>
                <p className="mb-5 italic text-xl md:text-2xl text-pink-500 font-semibold underline-offset-4 underline decoration-dashed">
                    DALE AL PLAY
                </p>                        
                <audio className="w-xs my-3" src="/audio/audio.mp4" controls controlsList="nodownload" />
                <audio className="w-xs my-3" src="/audio/audio.mp4" controls controlsList="nodownload" />       
                <button className="button mt-10">
                    Ya me lo dirás 🙃
                </button>
            </div>
        </>
    )
}
