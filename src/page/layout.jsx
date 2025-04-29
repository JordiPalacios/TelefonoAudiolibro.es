import React from 'react'
import { Outlet } from 'react-router'
import { Footer, NavMenu } from '../components'

export const Layout = () => {
    return (
        <>
            <NavMenu />
            {/* Aquí renderizo los componentes de forma dinámica */}
            <Outlet />
            <Footer />
        </>
    )
}
