import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            const offset = -150; 
            const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: "smooth" })
            window.history.replaceState(null, "", window.location.pathname);
        }
        }
    }, [hash]);

    return null;
}
