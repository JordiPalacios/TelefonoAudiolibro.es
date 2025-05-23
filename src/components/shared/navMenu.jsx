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

    console.log(isOpen)

    return (
        <>
        <nav 
            className={`navContainer fixed top-0 left-0 w-full z-50 flex items-center justify-between p-4 transition-all duration-300
                ${scrolled
                    ? "bg-white/60 backdrop-blur-md shadow"
                    : "bg-transparent"
                }`}
                >
            <Hamburger onChange={toggleMenu} />
            <h1 className="hidden lg:block">Solo pc</h1>
            <h1 className="text-xs text-white/90 font-serif font-bold truncate hover:text-white/70 transition-colors duration-300">
                <a href="/">                    
                    telefonoaudiolibro.es
                </a>
            </h1>
            <a
                href="/contacto"
                className="text-white hover:text-white/70 transition-colors duration-300"
                >
                Contacto
            </a>
        </nav>
        {isOpen && (
            <aside className="fixed top-18 left-0 w-fit h-full z-50  flex flex-col items-start py-2 px-6 bg-white/20 backdrop-blur-md shadow">
                {/* Aquí va el contenido del menú móvil */}
                <a href="/" className="mb-4 text-lg font-bold text-white">Inicio</a>
                <a href="/contacto" className="mb-4 text-lg font-bold text-white">Contacto</a>
                {/* Puedes añadir más enlaces o contenido aquí */}
            </aside>
        )
        }
        </>
    );
};
