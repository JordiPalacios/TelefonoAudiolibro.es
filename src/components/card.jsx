
export const Card = ({ id, tittle, desc1, desc2 }) => {
    return (
        <div className="relative flex flex-col items-center justify-evenly text-center w-xs md:w-md aspect-[4/3] gap-4 p-4 my-10 md:my-20 lg:mx-4 bg-gray-100/50 rounded-4xl shadow-md">
            <span
                className="title-accent absolute -top-135 left-6 text-7xl font-extrabold select-none pointer-events-none rotate-12"
                style={{ lineHeight: 15, color: "transparent", WebkitTextStroke: "2px #000", textStroke: "2px #9ca3af" }}
            >
                {id}
            </span>
            <h2 className="font-extrabold text-xl md:text-2xl text-balance mt-5 md:mt-2">
                {tittle}
            </h2>
            <p className="font-bold md:text-lg text-pink-500">
                {desc1}
            </p>
            <p className="font-semibold md:text-lg">
                {desc2}
            </p>
        </div>
    )
}
