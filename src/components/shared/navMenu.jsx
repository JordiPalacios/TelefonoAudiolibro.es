import { useEffect, useState } from "react";
import { Hamburger } from "../hamburger";
import { NavSections } from "./navSections";
import { useLocation } from "react-router";

export const NavMenu = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const isLegalPage = location.pathname ==='/aviso-legal' || location.pathname === '/politica-privacidad' || location.pathname === '/terminos-condiciones'
    const showBg = scrolled || isLegalPage;
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
                ${showBg
                    ? "bg-black/60 backdrop-blur-md shadow-lg"
                    : "bg-transparent backdrop-blur-none shadow-none"
                }`}
                >
            <Hamburger onChange={toggleMenu} />
            <div className="hidden w-full lg:flex flex-row items-start justify-end lg:gap-10 px-6">
                <NavSections section="inicio" otherPage={isLegalPage}/>
                <NavSections section="guia" otherPage={isLegalPage}/>
                <NavSections section="audios" otherPage={isLegalPage}/>
                <NavSections section="opiniones" otherPage={isLegalPage}/>
            </div>
            <h1 className="w-full title-font text-sm lg:text-lg lg:mb-4 text-white/90 hover:text-white/70 transition-colors duration-300">
                <a href="/">                    
                    telefonoaudiolibro.es
                </a>
            </h1>
        </nav>
        {isOpen && (
            <aside className="fixed top-18 right-0 w-fit h-full z-50 flex flex-col items-start py-2 px-6 bg-black/20 backdrop-blur-md shadow">
                <NavSections section="inicio" otherPage={isLegalPage}/>
                <NavSections section="guia" otherPage={isLegalPage}/>
                <NavSections section="audios" otherPage={isLegalPage}/>
                <NavSections section="opiniones" otherPage={isLegalPage}/>
            </aside>
        )
        }
        </>
    );
};
