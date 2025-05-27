import { useEffect, useState } from "react";
import { Hamburger } from "../hamburger";

export const NavMenu = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <nav 
            className={`navContainer fixed top-0 left-0 w-full z-50 flex flex-row-reverse items-center justify-between lg:justify-center lg:gap-0 p-4 transition-all duration-300
                ${scrolled
                    ? "bg-white/60 backdrop-blur-md shadow"
                    : "bg-transparent"
                }`}
                >
            <Hamburger onChange={toggleMenu} />
            <div className="w-full flex flex-row items-start justify-end lg:gap-10 px-6">
                <a 
                    href="/"
                    className="hidden lg:block text-white hover:text-white/70 transition-colors duration-300" >
                    Inicio
                </a>
                <a
                    href="/contacto"
                    className="hidden lg:block text-white hover:text-white/70 transition-colors duration-300"
                    >
                    Contacto
                </a>
            </div>
            <h1 className="w-full text-md text-white/90 font-serif font-bold hover:text-white/70 transition-colors duration-300">
                <a href="/">                    
                    telefonoaudiolibro.es
                </a>
            </h1>
        </nav>
        {isOpen && (
            <aside className="fixed top-18 right-0 w-fit h-full z-50  flex flex-col items-start py-2 px-6 bg-white/20 backdrop-blur-md shadow">
                <a href="/" className="mb-4 text-lg font-bold text-white">Inicio</a>
                <a href="/contacto" className="mb-4 text-lg font-bold text-white">Contacto</a>
                {/* Añadir más enlaces o contenido aquí */}
            </aside>
        )
        }
        </>
    );
};
