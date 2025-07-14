
export const Footer = () => {
    return (
        <footer className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-4 py-10 bg-footer px-15">
            <a href="/" className="cursor-pointer transition-transform duration-500 hover:scale-110">                
                <img src="/img/logoTelefonoAudiolibro.webp" alt="logo" className="w-45" />
            </a>
            <div className="flex flex-col items-center justify-center gap-4 py-5 lg:py-10">                
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
                <small className="text-xs text-center font-bold">
                    © 2025 telefonoaudiolibro.es - Todos los derechos reservados. 
                </small>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 py-10 text-xs lg:text-sm underline underline-offset-2 tracking-tighter leading-tight">
                <a href="/aviso-legal" className="footerDescription">Aviso Legal</a>
                <a href="/politica-privacidad" className="footerDescription">Política de Privacidad</a>
                <a href="/terminos-condiciones" className="footerDescription">Términos y condiciones</a>
            </div>
        </footer>
    )
}
