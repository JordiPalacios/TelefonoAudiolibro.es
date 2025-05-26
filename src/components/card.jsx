
export const Card = ({ id, url, tittle, desc1, desc2 }) => {
    return (
        <>
            <p className="font-bold">
                {id}
            </p>
            <img src={url} alt={tittle} width="150px" height="150px"/>
            <h2 className="font-bold text-2xl">
                {tittle}
            </h2>
            <p>
                {desc1}
            </p>
            <p>
                {desc2}
            </p>
        </>
    )
}
