import { Outlet, useLocation } from 'react-router'
import { Footer, NavMenu } from '../components'

export const Layout = () => {
    const location =useLocation()
    const hiddeNavAndFooter = location.pathname === '/reserva-realizada'
    return (
        <>
            {!hiddeNavAndFooter && <NavMenu />}
            {/* Aquí renderizo los componentes de forma dinámica */}
            <Outlet />
            {!hiddeNavAndFooter && <Footer />}
        </>
    )
}
