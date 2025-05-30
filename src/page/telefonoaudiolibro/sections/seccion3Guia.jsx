import { Card } from "../../../components"

export const Seccion3Guia = () => {
  return (
    <div className="py-5">
      <h2 className="text-center text-xl font-bold font-serif">¿CÓMO FUNCIONA?</h2>
      <Card 
        url="/img/telf01.webp"
        tittle="1.RECIBE EL TELÉFONO"
        desc1=" Te lo enviamos días antes a domicilio. "
        desc2="¡Ya podéis grabar vuestro mensaje de bienvenida! "   
      />
      <Card 
        url="/img/telf05.webp"
        tittle="2.TUS PERSONAS FAVORITAS DEJAN MENSAJES DE AUDIO"
        desc1=" Desde emotivos hasta divertidos y cachondos.  "
        desc2=" Todo esto es lo que recordaras para el resto de tus días. "   
      />
      <Card 
        url="/img/telf13.webp"
        tittle="3.RECIBE LOS MENSAJES EN 24 HORAS"
        desc1=" Os recogemos el teléfono y transformamos los mensajes en recuerdos en digital que tendréis para siempre " 
      />
    </div>
  )
}
