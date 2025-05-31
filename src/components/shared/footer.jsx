
export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center gap-4 my-10">
            <h1 className="font-bold text-sm md:text-xl text-center">
                telefonoaudiolibro.es
            </h1>
            <small className="text-xs md:text-base text-center">
                © 2025 telefonoaudiolibro.es - Todos los derechos reservados. 
            </small>
            <div className="flex flex-row gap-2 items-center justify-center">
                <a 
                    href="https://www.instagram.com/telefonoaudiolibro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-500 hover:scale-110"
                >
                    <img src="/icons/ig.svg" alt="instagram icon" className="w-9 h-9 aspect-[3/4]" loading="lazy"/>
                </a>
                <a 
                    href="https://www.instagram.com/telefonoaudiolibro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-500 hover:scale-110"
                >
                    <img src="/icons/tiktok.svg" alt="tiktok icon" className="w-8 h-8 aspect-[3/4]" loading="lazy"/>
                </a>
            </div>
        </footer>
    )
}
