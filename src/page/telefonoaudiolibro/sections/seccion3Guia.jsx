import { Card } from "../../../components"

export const Seccion3Guia = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <h2 className="title text-center mt-5 underline decoration-wavy decoration-2 underline-offset-2">
        ¿CÓMO FUNCIONA?
      </h2>
      <div className="flex flex-col lg:flex-row lg:gap-8 items-center justify-center">
        <Card 
          url="/img/telf01.webp"
          id="1"
          tittle=" RECIBE EL TELÉFONO "
          desc1=" Te lo enviamos días antes a domicilio. "
          desc2="¡Ya podéis grabar vuestro mensaje de bienvenida! "   
          />
        <Card 
          url="/img/telf18.webp"
          id="2"
          tittle=" TUS PERSONAS FAVORITAS DEJAN MENSAJES DE AUDIO "
          desc1=" Desde emotivos hasta divertidos y cachondos.  "
          desc2=" Todo esto es lo que recordarás para el resto de tus días. "   
          />
        <Card 
          url="/img/telf13.webp"
          id="3"
          tittle=" RECIBE LOS MENSAJES EN 24 HORAS "
          desc1=" ¡Os recogemos el teléfono! " 
          desc2=" Transformamos los mensajes en recuerdos digitales que tendréis para siempre"
          />
      </div>
      <button className="button m-5">
        texto provisional
      </button>
    </div>
  )
}
