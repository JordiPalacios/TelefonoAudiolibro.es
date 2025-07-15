export const NavSections = ( {section} ) => {
    const name = section.charAt(0).toUpperCase() + section.slice(1);
    
    console.log("name", name)

    return (
        <a href={section}
        onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById(section);
                    if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    // Quita el hash de la URL
                    window.history.replaceState(null, "", window.location.pathname);
                    } else {
                    window.location.href = section; 
                    }
                }}
        className='mb-4 text-sm lg:text-lg text-white hover:text-white/70 transition-colors duration-300'>
            {name}
        </a>
    )
}
