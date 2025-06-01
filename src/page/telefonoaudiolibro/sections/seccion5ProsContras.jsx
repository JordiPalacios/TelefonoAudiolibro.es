import ProsVSContsData from "../../../assets/mocks/prosVSconts.json"
import { CrossIcon, TickIcon } from "../../../components"

export const Seccion5ProsContras = () => {
    const prosVSconts = ProsVSContsData
    return (
        <>
            <h2 className="title text-center">
                ¿CON CÚAL TE QUEDAS?
            </h2>
            <div className="flex flex-col items-center justify-center w-full">                
                <table className="max-w-md w-full text-center px-5 py-2 border-separate border-spacing-y-4 bg-white/50 shadow-md rounded-xl">
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
                            <tr key={item.id} className="align-middle">
                                <td className="align-middle">
                                    <div className="flex justify-center">    
                                        {item.isCrossLeft 
                                            ? <CrossIcon className="w-8 h-8 text-red-600" />
                                            : <TickIcon className="w-8 h-8 text-green-600" />
                                        }
                                    </div>
                                </td>
                                <td className="align-middle font-semibold text-md md:text-lg">
                                    {item.tittle}
                                </td>
                                <td className="align-middle">
                                    <div className="flex justify-center">
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
        </>
    )
}
