import { useViewInterseccion } from "../../../assets/customHooks"

export const Seccion1Video = () => {
    const [viewInterseccion, ref] = useViewInterseccion(0.15)
    return (
        <>
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
                className={`m-5 lg:m-10 rounded-tl-4xl rounded-br-4xl max-w-3/4 md:max-w-lg lg:max-w-xs object-cover
                transition-opacity duration-300 
                ${viewInterseccion ? "lg:opacity-100" : "opacity-0"}
                `}
                />
            <button className='button lg:hidden m-5'>
                    texto provisional
            </button>
        </>
    )
}
