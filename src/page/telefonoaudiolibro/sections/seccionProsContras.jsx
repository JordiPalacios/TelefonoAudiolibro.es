import ProsVSContsData from "../../../assets/mocks/prosVSconts.json"
import { CardQA, CrossIcon, TickIcon } from "../../../components"

export const SeccionProsContras = () => {
    const prosVSconts = ProsVSContsData
    return (
        <div className="py-10">
            <h2 className="title-font title-small font-extrabold text-center mb-5">
                ¿CON <span className="title-accent font-extrabold text-pink-600/90">CÚAL</span> TE QUEDAS?
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 px-5">
                <div className="comparisonAnimation flex flex-col items-center justify-center w-full">                
                    <table className="max-w-md w-full text-center px-5 py-2 border-separate border-spacing-y-4 bg-pink-200/50 shadow-lg shadow-black/30 rounded-xl border border-pink-600/10">
                        <thead>                    
                            <tr>
                                <th className="align-middle">
                                    <img src="/img/manual.webp" alt="telefonoaudiolibro.es" className="max-w-20 md:max-w-25 h-auto aspect-[3/4] rounded-full" loading="lazy" />
                                </th>
                                <th />
                                <th className="align-middle">
                                    <img src="/img/auxiliares/telefonoMuestra00.webp" alt="telefonoaudiolibro.es" className="max-w-20 md:max-w-30 h-auto rotate-15" loading="lazy" />
                                </th>
                            </tr>
                        </thead>
                        <tbody>                    
                            {prosVSconts.map((item) => (
                                <tr key={item.id} className="align-middle shadow-md shadow-black/30 rounded-r-full rounded-l-full">
                                    <td className="align-middle rounded-l-full">
                                        <div className="flex justify-center py-3">    
                                            {item.isCrossLeft 
                                                ? <CrossIcon className="w-8 h-8 text-red-600" />
                                                : <TickIcon className="w-8 h-8 text-green-600" />
                                            }
                                        </div>
                                    </td>
                                    <td className="align-middle font-semibold text-md md:text-lg">
                                        {item.tittle}
                                    </td>
                                    <td className="align-middle bg-pink-300/50 shadow-lg shadow-black/30 rounded-r-full">
                                        <div className="flex justify-center py-3">
                                            {item.isCrossRight 
                                                ? <CrossIcon className="w-8 h-8 text-red-600" />
                                                : <TickIcon className="w-8 h-8 text-green-600" />
                                            }
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col items-center justify-center w-full">                
                    <CardQA 
                    question="¿Cuando recibiré el teléfono?"
                    answer="Una vez realizado el pedido, recibirás el teléfono en un plazo de 3 a 5 días laborables. El envío es gratuito y se realiza a través de Correos Express."
                    />
                    <CardQA 
                    question="¿Cómo se devuelve el teléfono?"
                    answer="Si no estás satisfecho con el teléfono, puedes devolverlo en un plazo de 14 días naturales desde la recepción. El teléfono debe estar en perfecto estado y con todos los accesorios originales. Los gastos de envío de la devolución corren a tu cargo."
                    />
                    <CardQA 
                    question="¿Cuando recibiré los audios?"
                    answer="Una vez realizado el pedido, recibirás los audios en un plazo de 24 horas. Los audios se envían por correo electrónico y podrás escucharlos en cualquier dispositivo compatible con archivos de audio."
                    />
                    <CardQA 
                    question="¿Cuántos audios se pueden grabar en un día?"
                    answer="Puedes grabar hasta 10 audios al día. Cada audio tiene una duración máxima de 10 minutos. Si necesitas grabar más audios, puedes hacerlo en días sucesivos."
                    />
                    <CardQA 
                    question="¿El teléfono necesita enchufe o wifi para funcionar?"
                    answer="No, el teléfono no necesita enchufe ni wifi para funcionar. Es un teléfono autónomo que funciona con batería y no requiere conexión a internet para reproducir los audios."
                    />
                </div>
            </div>
        </div>
    )
}
