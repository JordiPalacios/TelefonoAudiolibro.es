import { Card } from "../../../components"

export const Seccion3Guia = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-5">
      <h2 className="title text-center mt-5">
        ¿CÓMO 
        <span className="title-accent font-light"> FUNCIONA? </span>
      </h2>
      <img 
      src="/img/auxiliares/telefonoMuestra01.webp" 
      alt="telefono audiolibro guia" 
      className="componentAnimation hidden lg:block max-w-xs object-cover absolute top-50 right-75"
      />
      <img 
      src="/img/auxiliares/telefonoMuestra01.webp" 
      alt="telefono audiolibro guia" 
      className="componentAnimation hidden lg:block max-w-xs object-cover absolute top-75 left-75"
      />
      <img 
      src="/img/auxiliares/telefonoMuestra01.webp" 
      alt="telefono audiolibro guia" 
      className="componentAnimation hidden lg:block max-w-xs object-cover absolute top-125 right-75"
      />
      <img 
      src="/img/auxiliares/telefonoMuestra01.webp" 
      alt="telefono audiolibro guia" 
      className="componentAnimation hidden lg:block max-w-xs object-cover absolute top-150 left-75"
      />
      <video 
      src="/video/videoGuia.mov" 
      itemType="video/mov"
      controls
      controlsList="nodownload"
      poster="/video/poster/poster08.webp"
      playsInline
      className="componentAnimation m-5 lg:m-10 rounded-2xl shadow-2xl max-w-3/4 md:max-w-sm object-cover"
      />
      <div className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center">
        <Card 
          url="/img/auxiliares/telefonoMuestra00.webp"
          id="1"
          tittle=" RECIBE EL TELÉFONO "
          desc1=" Te lo enviamos días antes a domicilio. "
          desc2="¡Ya podéis grabar vuestro mensaje de bienvenida! "   
          />
        <Card 
          url="/img/auxiliares/telefonoMuestra00.webp"
          id="2"
          tittle=" TUS PERSONAS FAVORITAS DEJAN MENSAJES DE AUDIO "
          desc1=" Desde emotivos hasta divertidos y cachondos.  "
          desc2=" Todo esto es lo que recordarás para el resto de tus días. "   
          />
        <Card 
          url="/img/auxiliares/telefonoMuestra00.webp"
          id="3"
          tittle=" RECIBE LOS MENSAJES EN 24 HORAS "
          desc1=" ¡Os recogemos el teléfono! " 
          desc2=" Transformamos los mensajes en recuerdos digitales que tendréis para siempre"
          />
      </div>
      <button className="button mb-5">
        texto provisional
      </button>
    </div>
  )
}
