
export const Footer = () => {

    return (
        <footer className="bg-footer text-center lg:text-center">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-center lg:gap-x-16 mb-10">
                <div className="flex flex-col items-center justify-center flex-1">                
                    <a 
                    href="mailto:contacto@telefonoaudiolibro.es?subject=Información sobre los servicios de Telefonoaudiolibro.es&body=Hola quiero saber más sobre telefonoaudiolibro!" 
                    target="_blank" 
                    rel='noreferrer'        
                    aria-label='Enlace al correo de Telefonoaudiolibro' 
                    className="inline-block text-sm lg:text-base mb-2 transition-transform duration-500 hover:scale-110">
                        contacto@telefonoaudiolibro.es
                    </a>
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
                </div>
                <a href="/" className="cursor-pointer transition-transform duration-500 hover:scale-110 flex-shrink-0">                
                    <img src="/img/logoTelefonoAudiolibro.webp" alt="logo" className="w-60 my-5" />
                </a>             
                <div className="flex flex-col items-center justify-center gap-4 text-xs lg:text-sm underline underline-offset-2 flex-1">
                    <a href="/aviso-legal" className="footerDescription">Aviso Legal</a>
                    <a href="/politica-privacidad" className="footerDescription">Política de Privacidad</a>
                    <a href="/terminos-condiciones" className="footerDescription">Términos y condiciones</a>
                </div>
            </div>
            <small className="w-full text-xs  font-bold">
                        © 2025 telefonoaudiolibro.es - Todos los derechos reservados. 
            </small>
        </footer>
    )
}
