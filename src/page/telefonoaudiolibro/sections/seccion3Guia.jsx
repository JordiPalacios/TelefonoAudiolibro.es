import { Card } from "../../../components"

export const Seccion3Guia = () => {
  return (
    <div className="relative flex flex-col py-5 overflow-hidden">
      <h2 className="title text-center mt-5">
        ¿CÓMO 
        <span className="title-accent font-light"> FUNCIONA? </span>
      </h2>
      <img 
      src="/img/auxiliares/telefonoMuestra04.webp" 
      alt="telefono audiolibro guia" 
      className="hidden lg:block max-w-60 object-cover p-5 absolute top-1/24 left-1/12 xl:left-1/6"
      />   
      <img 
      src="/img/auxiliares/telefonoMuestra04.webp" 
      alt="telefono audiolibro guia" 
      className="hidden lg:block max-w-45 object-cover p-5 absolute top-7/24 xl:top-1/2 right-1/12 xl:right-1/6"
      />
      <video 
      src="/video/videoGuia.mov" 
      itemType="video/mov"
      controls
      controlsList="nodownload"
      poster="/video/poster/poster08.webp"
      playsInline
      className="componentAnimation mb-5 md:mb-20 self-center rounded-2xl shadow-2xl max-w-3/4 md:max-w-xs xl:max-w-sm object-cover"
      />
      <div className="flex flex-col items-stretch justify-center xl:flex-row overflow-hidden px-5 xl:gap-5 2xl:gap-40">
        <Card 
          url="/img/auxiliares/iconoGuia_1.webp"
          id="1"
          tittle=" RECIBE EL TELÉFONO "
          desc1=" Te lo enviamos días antes a domicilio. "
          desc2="¡Ya podéis grabar vuestro mensaje de bienvenida! "   
          className = "self-center sm:self-start xl:self-auto"
          />
        <Card 
          url="/img/auxiliares/iconoGuia_2.webp"
          id="2"
          tittle=" TUS PERSONAS FAVORITAS DEJAN MENSAJES DE AUDIO "
          desc1=" Desde emotivos hasta divertidos y cachondos.  "
          desc2=" Todo esto es lo que recordarás para el resto de tus días. "   
          className = "self-center sm:self-end xl:self-auto"
          />
        <Card 
          url="/img/auxiliares/iconoGuia_3.webp"
          id="3"
          tittle=" RECIBE LOS MENSAJES EN 24 HORAS "
          desc1=" ¡Os recogemos el teléfono! " 
          desc2=" Transformamos los mensajes en recuerdos digitales que tendréis para siempre"
          className = "self-center sm:self-start xl:self-auto"
          />
      </div>
      <a 
      href="https://book.stripe.com/bJebJ3gex0Kx4DjehEgA804"
      target="_blank"
      rel="noreferrer noopener"
      className="button mb-5 self-center uppercase"
      >
        Reservar ahora
      </a>
    </div>
  )
}
