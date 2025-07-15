import { Outlet, useLocation } from 'react-router'
import { Footer, NavMenu, ScrollToHash } from '../components'

export const Layout = () => {
    const location =useLocation()
    const hiddeNavAndFooter = location.pathname === '/reserva-realizada'
    return (
        <>
            {/* Componente para manejar el scroll suave al hacer clic en enlaces con hash (id desde otra página) */}
            <ScrollToHash />
            {!hiddeNavAndFooter && <NavMenu />}
            {/* Aquí renderizo los componentes de forma dinámica */}
            <Outlet />
            {!hiddeNavAndFooter && <Footer />}
        </>
    )
}
