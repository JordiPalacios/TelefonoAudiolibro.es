
export const SeccionDescripcionInvitados = () => {
    const classImg = 'componentAnimation max-w-55 object-cover aspect-[3/4] rounded-xl'

    return (
        <>
            <h1 className="title title-font pt-10">
                Entretén a tus <span className="title-accent font-extrabold text-pink-500/90">invitados</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl md:mb-10 lg:mb-15 tracking-tighter leading-tight">
                Creen que están jugando con un teléfono antiguo.
                Pero no saben que están <b>construyendo vuestro recuerdo</b> más salvaje.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-around xl:justify-center mt-5 pb-10 gap-4 lg:gap-0 xl:gap-16 2xl:gap-20">
                <img 
                    src="/img/telf18.webp"
                    alt="Invitados jugando con el teléfono antiguo" 
                    loading='lazy'
                    className={classImg}
                />
                <img 
                    src="/img/telf25.webp"
                    alt="Invitados jugando con el teléfono antiguo" 
                    loading='lazy'
                    className={classImg}
                />
                <img 
                    src="/img/telf28.webp"
                    alt="Invitados jugando con el teléfono antiguo" 
                    loading='lazy'
                    className={classImg}
                />
            </div>
        </>
    )
}
