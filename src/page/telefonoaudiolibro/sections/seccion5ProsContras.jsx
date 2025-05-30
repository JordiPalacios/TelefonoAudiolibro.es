import ProsVSContsData from "../../../assets/mocks/prosVSconts.json"
import { CrossIcon, TickIcon } from "../../../components"

export const Seccion5ProsContras = () => {
    const prosVSconts = ProsVSContsData
    return (
        <>
            <h2 className="text-3xl font-bold font-serif mb-10 text-center">
                ¿CON CÚAL TE QUEDAS?
            </h2>
            <div className="flex flex-col items-center justify-center w-full">                
                <table className="max-w-md w-full text-center mb-10 px-5 border-separate border-spacing-y-4 bg-white/50 p-3 shadow-md rounded-xl">
                    <thead>                    
                        <tr>
                            <th className="align-middle">
                                <img src="/img/manual.webp" alt="telefonoaudiolibro.es" className="max-w-30 h-auto aspect-[3/4] rounded-xl" />
                            </th>
                            <th />
                            <th className="align-middle">
                                <img src="/img/telf12.webp" alt="telefonoaudiolibro.es" className="max-w-30 h-auto aspect-[3/4] rounded-xl" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>                    
                        {prosVSconts.map((item) => (
                            <tr key={item.id} className="align-middle">
                                <td className="align-middle">
                                    <div className="flex justify-center">    
                                        {item.isCrossLeft 
                                            ? <CrossIcon className="w-8 h-8 text-red-600" />
                                            : <TickIcon className="w-8 h-8 text-green-600" />
                                        }
                                    </div>
                                </td>
                                <td className="align-middle font-semibold text-lg">
                                    {item.tittle}
                                </td>
                                <td className="align-middle">
                                    <div className="flex justify-center">
                                        {item.isCrossLeft 
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
        </>
    )
}
