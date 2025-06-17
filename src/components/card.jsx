import { useViewInterseccion } from "../assets/customHooks"

export const Card = ({ id, tittle, desc1, desc2, url, className = "" }) => {
    const [viewInterseccion, ref] = useViewInterseccion(0.85)

    return (
        <div 
        ref={ref}
        transition-style={
            viewInterseccion 
            ? "in:circle:center"
            : ""
        }
        className={`relative flex flex-col items-center justify-evenly text-center w-full md:max-w-sm lg:max-w-sm aspect-[4/3] p-4 my-10 lg:mx-4 bg-gray-100/50 rounded-4xl shadow-xl ${className}
        transition-opacity duration-300 ${viewInterseccion ? "opacity-100" : "opacity-0"}`}
        >
            <span
                className="title-accent absolute -top-135 left-6 text-7xl font-extrabold select-none pointer-events-none rotate-12"
                style={{ lineHeight: 15, color: "transparent", WebkitTextStroke: "2px #000", textStroke: "2px #9ca3af" }}
            >
                {id}
            </span>
            <img 
            src={url} 
            alt="telefono audiolibro guia" 
            className="lg:componentAnimation max-w-40 object-cover absolute -top-10 -right-7"
            />
            <h2 className="font-extrabold text-xl md:text-2xl text-balance mt-10 md:mt-5">
                {tittle}
            </h2>
            <p className="font-bold md:text-lg text-pink-500">
                {desc1}
            </p>
            <p className="font-semibold mb-10 md:mt-2 md:text-lg">
                {desc2}
            </p>
        </div>
    )
}
