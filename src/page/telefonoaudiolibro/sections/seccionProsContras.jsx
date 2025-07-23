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
                    question="¿Cuándo recibo el teléfono?"
                    answer="Os enviamos el teléfono una seman antes de la boda a vuestro domicilio."
                    />
                    <CardQA 
                    question="¿Hay límite de grabación de audios?"
                    answer="No hay límite."
                    />
                    <CardQA 
                    question="¿Cuánto dura la batería?"
                    answer="Si el teléfono está cargado, su batería puede durar hasta 2 días."
                    />
                    <CardQA 
                    question="¿Enviáis a mi ciudad?"
                    answer="Hacemos envíos a toda España incluyendo las Islas Baleares y Canarias."
                    />
                    <CardQA 
                    question="¿Cuándo y cómo hago la devolución?"
                    answer="Cuando acabe la boda, un repartidor os recogerá el teléfono a vuestro domicilio el lunes o martes siguiente."
                    />
                    <CardQA 
                    question="¿Necesita estar enchufado para que funcione?"
                    answer="No. Sólo para cargarlo previamente, el teléfono es inalámbrico."
                    />
                    <CardQA 
                    question="¿Cuándo recibiré los audios?"
                    answer="Conectando el teléfono por USB al ordenador puedes ver los audios. También te los enviaremos al recibir el teléfono."
                    />
                </div>
            </div>
        </div>
    )
}
