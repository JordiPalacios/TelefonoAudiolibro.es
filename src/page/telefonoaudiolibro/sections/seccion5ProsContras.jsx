import ProsVSContsData from "../../../assets/mocks/prosVSconts.json"
import { CrossIcon, TickIcon } from "../../../components"

export const Seccion5ProsContras = () => {
    const prosVSconts = ProsVSContsData
    return (
        <div className="py-10">
            <h2 className="title-main font-extrabold text-3xl md:text-7xl tracking-tighter text-center mb-5">
                ¿CON <span className="title-accent font-extrabold text-pink-600/90">CÚAL</span> TE QUEDAS?
            </h2>
            <div className="comparisonAnimation flex flex-col items-center justify-center w-full">                
                <table className="max-w-md w-full text-center px-5 py-2 border-separate border-spacing-y-4 bg-pink-100/50 shadow-lg shadow-black/30 rounded-xl border border-pink-600/10
                ">
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
                            <tr key={item.id} className="align-middl bg-pink-200/50 shadow-md shadow-black/20 rounded-xl">
                                <td className="align-middle">
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
                                <td className="align-middle bg-pink-200/50 shadow-lg shadow-black/20 rounded-xl">
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
        </div>
    )
}
