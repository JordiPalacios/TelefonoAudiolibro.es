import { useEffect, useRef, useState } from "react"

export const useViewInterseccion = () => {
    const [active, setActive] = useState(false)
    const ref  =useRef(null)

    useEffect (() => {
        if (!ref.current) return

        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActive(true)
                    observer.disconnect()
                } 
            },
            { threshold: 0.2 }
        )

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [ref.current])

    return [active, ref]
}
