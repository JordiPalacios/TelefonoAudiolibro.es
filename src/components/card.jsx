
export const Card = ({ url, tittle, desc1, desc2 }) => {
    return (
        <div className="flex flex-col items-center justify-evenly text-center w-xs md:w-md aspect-[3/4] gap-4 p-4 my-2 lg:mx-4 bg-gray-100/50 rounded-lg shadow-md">
            <h2 className="font-semibold text-xl md:text-2xl text-balance">
                {tittle}
            </h2>
            <img src={url} alt={tittle} width="150" height="150" className="rounded-full" loading="lazy"/>
            <p className="font-bold md:text-lg text-pink-500">
                {desc1}
            </p>
            <p className="font-semibold md:text-lg">
                {desc2}
            </p>
        </div>
    )
}
