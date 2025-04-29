import React from "react";
import { Hamburger } from "../hamburger";

export const NavMenu = () => {
    return (
        <nav className="w-full flex items-center justify-between px-4">
            <Hamburger className = "inline-block  md:hidden" />
            <h1 className="text-xl font-bold truncate">Teléfono Audiolibro</h1>
            <a
                href="/contacto"
                className="text-blue-500 hover:text-blue-700 underline"
            >
                Contacto
            </a>
        </nav>
    );
};
