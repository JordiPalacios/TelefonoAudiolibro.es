import React from 'react'
import { Outlet } from 'react-router'

export const Layout = () => {
    return (
        <>
            <section>Navbar</section>
            {/* Aquí renderizo los componentes de forma dinámica */}
            <Outlet />
            <section>Footer</section>
        </>
    )
}
