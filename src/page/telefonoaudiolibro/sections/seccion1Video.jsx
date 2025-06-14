import { useViewInterseccion } from "../../../assets/customHooks"

export const Seccion1Video = () => {
    const [viewInterseccion, ref] = useViewInterseccion(0.10)
    return (
        <>
            <img 
            src="/img/auxiliares/stars.webp" 
            alt="telefono audiolibro guia" 
            className="componentAnimation max-w-35 md:max-w-60 lg:max-w-70 object-cover absolute top-20 -right-15 md:-right-25 lg:left-250 rotate-12"
            />
            <img 
            src="/img/auxiliares/stars.webp" 
            alt="telefono audiolibro guia" 
            className="componentAnimation max-w-35 md:max-w-60 lg:max-w-70 object-cover absolute top-40 -left-15 md:-left-10 lg:top-10 lg:left-10 rotate-12"
            />
            <img 
            src="/img/auxiliares/stars.webp" 
            alt="telefono audiolibro guia" 
            className="componentAnimation  max-w-35 md:max-w-60 lg:max-w-40 object-cover absolute top-60 md:top-100 lg:top-80 -right-15 md:-right-20 lg:left-270 rotate-12"
            />
            <img 
            src="/img/auxiliares/stars.webp" 
            alt="telefono audiolibro guia" 
            className="componentAnimation max-w-35 md:max-w-60 lg:max-w-40 object-cover absolute top-80 md:top-120 lg:top-100 -left-15 md:-left-5 lg:left-75 rotate-12"
            />
            <img 
            src="/img/auxiliares/stars.webp" 
            alt="telefono audiolibro guia" 
            className="componentAnimation max-w-35 md:max-w-60 lg:max-w-65 object-cover absolute top-100 md:top-160 lg:top-120 -right-15 md:-right-5 lg:left-200 rotate-12"
            />
            <img 
            src="/img/auxiliares/stars.webp" 
            alt="telefono audiolibro guia" 
            className="componentAnimation max-w-35 md:max-w-60 lg:max-w-65 object-cover absolute top-120 md:top-180 lg:top-120 -left-15 md:-left-0 lg:left-20 rotate-12"
            />
            <div className="flex flex-col items-center justify-center">            
                <h2 className="title">
                    ESTOS PRODRÍAIS SER VOSOTROS
                </h2>
                <p className="font-semibold text-lg md:text-xl lg:text-2xl">
                    Reviviendo de <span className="text-pink-500 font-extrabold">nuevo</span> la boda de el día siguiente.
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
                ref={ref}
                transition-style={
                viewInterseccion 
                ? "in:square:center"
                : ""
                } 
                className={`m-5 lg:m-10 rounded-tl-4xl rounded-br-4xl max-w-3/4 md:max-w-xs object-cover
                transition-opacity duration-300 
                ${viewInterseccion ? "lg:opacity-100" : "opacity-0"}
                `}
                />
            <button className='button lg:hidden mb-5 md:m-5'>
                    texto provisional
            </button>
        </>
    )
}
