import { Card } from "../../../components"

export const SeccionGuia = () => {
  return (
    <div className="relative flex flex-col py-5 overflow-hidden">
      <div className="flex flex-row justify-center items-center gap-1">        
        <p className="text-2xl md:text-4xl text-pink-500 font-light mt-5">
          bla
        </p>
        <p className="text-2xl md:text-4xl text-pink-500 font-light rotate-8 bg-pink-200 px-3 py-1">
          bla
        </p>
        <p className="text-2xl md:text-4xl text-pink-500 font-light mt-5 -rotate-10">
          bla
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-2">        
        <h2 className="title title-font text-center -mt-4">
          ¿Cómo
        </h2>
        <h2 className="title-small text-pink-500 font-accent italic mt-5 md:mt-10">
          funciona?
        </h2>
      </div>
      <div className="flex flex-col justify-center lg:flex-row-reverse">
        <div className="flex flex-col items-center justify-around lg:px-15">          
          <video 
          src="/video/videoInfluencer.mov" 
          itemType="video/mov"
          controls
          controlsList="nodownload"
          poster="/video/poster/posterGuiaInflu02.webp"
          playsInline
          className="mb-5 rounded-2xl shadow-xl max-w-3/4 md:max-w-xs 2xl:max-w-sm object-cover"
          />
          <img 
          src="/img/auxiliares/telefonoMuestra04.webp" 
          alt="telefono audiolibro guia" 
          className="hidden lg:block max-w-60 object-cover -rotate-10"
          /> 
        </div>
        <div className="w-full xl:max-w-5xl flex flex-col overflow-hidden px-5">
          <Card 
            url="/img/auxiliares/iconoGuia_1.webp"
            id="1"
            tittle=" RECIBE EL TELÉFONO "
            desc1=" Te lo enviamos días antes a domicilio. "
            desc2="¡Ya podéis grabar vuestro mensaje de bienvenida! "   
            className = "self-center sm:self-start"
            />
          <Card 
            url="/img/auxiliares/iconoGuia_2.webp"
            id="2"
            tittle=" TUS PERSONAS FAVORITAS DEJAN MENSAJES DE AUDIO "
            desc1=" Desde emotivos hasta divertidos y cachondos.  "
            desc2=" Todo esto es lo que recordarás para el resto de tus días. "   
            className = "self-center sm:self-end"
            />
          <Card 
            url="/img/auxiliares/iconoGuia_3.webp"
            id="3"
            tittle=" RECIBE LOS MENSAJES EN 24 HORAS "
            desc1=" ¡Os recogemos el teléfono! " 
            desc2=" Transformamos los mensajes en recuerdos digitales que tendréis para siempre"
            className = "self-center sm:self-start"
            />
        </div>
      </div>
      <a 
      href="https://wa.me/message/2RM67GODIWVUE1"
      target="_blank"
      rel="noreferrer noopener"
      className="button self-center sm:mr-10 uppercase"
      >
        Consultar fecha
      </a>
</div>
  )
}
