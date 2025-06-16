import ProsVSContsData from "../../../assets/mocks/prosVSconts.json"
import { CrossIcon, TickIcon } from "../../../components"

export const Seccion5ProsContras = () => {
    const prosVSconts = ProsVSContsData
    return (
        <div className="py-10">
            <h2 className="title text-center mb-5">
                ¿CON CÚAL TE QUEDAS?
            </h2>
            <div className="comparisonAnimation flex flex-col items-center justify-center w-full">                
                <table className="max-w-md w-full text-center px-5 py-2 border-separate border-spacing-y-4 bg-pink-100/50 shadow-md rounded-xl">
                    <thead>                    
                        <tr>
                            <th className="align-middle">
                                <img src="/img/manual.webp" alt="telefonoaudiolibro.es" className="max-w-20 md:max-w-35 h-auto aspect-[3/4] rounded-xl" loading="lazy" />
                            </th>
                            <th />
                            <th className="align-middle">
                                <img src="/img/telf12.webp" alt="telefonoaudiolibro.es" className="max-w-20 md:max-w-35 h-auto aspect-[3/4] rounded-xl" loading="lazy" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>                    
                        {prosVSconts.map((item) => (
                            <tr key={item.id} className="align-middl bg-pink-100/50 shadow-md shadow-black/20 rounded-xl">
                                <td className="align-middle">
                                    <div className="flex justify-center">    
                                        {item.isCrossLeft 
                                            ? <CrossIcon className="w-8 h-8 text-pink-400" />
                                            : <TickIcon className="w-8 h-8 text-pink-600" />
                                        }
                                    </div>
                                </td>
                                <td className="align-middle font-semibold text-md md:text-lg">
                                    {item.tittle}
                                </td>
                                <td className="align-middle bg-pink-200/50 shadow-lg shadow-black/20 rounded-xl">
                                    <div className="flex justify-center">
                                        {item.isCrossRight 
                                            ? <CrossIcon className="w-8 h-8 text-red-600" />
                                            : <TickIcon className="w-8 h-8 text-pink-600" />
                                        }
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
