
export const Card = ({ url, tittle, desc1, desc2 }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-4 p-4 my-4 bg-white/30 rounded-lg shadow-md">
            <h2 className="font-bold text-xl text-balance">
                {tittle}
            </h2>
            <img src={url} alt={tittle} width="150px" height="150px" className="rounded-full" />
            <p>
                {desc1}
            </p>
            <p>
                {desc2}
            </p>
        </div>
    )
}
