
export const NavSections = ( {section, otherPage} ) => {
    const name = section.charAt(0).toUpperCase() + section.slice(1);
    const href = otherPage ? `/#${section}` : section
    
    return (
        <a 
        href={href}
        onClick={e => {
            let id = section.replace(/^\/?#/, "");
            const el = document.getElementById(id);
            if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
                window.history.replaceState(null, "", window.location.pathname);
            }
        }}
        className='mb-4 text-sm lg:text-lg text-white hover:text-white/70 transition-colors duration-300'>
            {name}
        </a>
    )
}
