import { Card } from "../../../components"

export const Seccion3Guia = () => {
  return (
    <>
      <h2>¿CÓMO FUNCIONA</h2>
      <Card 
        id="1"
        url="/media/header/telf07.webp"
        tittle="RECIBE EL TELÉFONO"
        desc1=" Te lo enviamos días antes a domicilio. "
        desc2="¡Ya podéis grabar vuestro mensaje de bienvenida! "   
      />
      <Card 
        id="2"
        url="/media/header/telf07.webp"
        tittle="TUS PERSONAS FAVORITAS DEJAN MENSAJES DE AUDIO"
        desc1=" Desde emotivos hasta divertidos y cachondos.  "
        desc2=" Todo esto es lo que recordaras para el resto de tus días. "   
      />
      <Card 
        id="3"
        url="/media/header/telf07.webp"
        tittle="RECIBE LOS MENSAJES EN 24 HORAS"
        desc1=" Os recogemos el teléfono y transformamos los mensajes en recuerdos en digital que tendréis para siempre " 
      />
    </>
  )
}
