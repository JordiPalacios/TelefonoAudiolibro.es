import { useState } from "react"
import { ArrowDown } from "../icons/arrowDown"

export const CardQA = ({ question, answer }) => {
    const [openAnswer, setOpenAnswer] = useState(true)
    return (
        <section className="componentAnimation hidden lg:flex flex-col items-center justify-center text-center w-full 2xl:w-3xl my-2 bg-pink-100/50 shadow-lg shadow-black/20 rounded-md">
            <div 
            className="relative w-full cursor-pointer"
            onClick={() => setOpenAnswer(!openAnswer)}
            >
                <ArrowDown className="absolute left-5 top-2"/>
                <h1 
                className="title-font font-semibold text-lg md:text-xl 2xl:text-2xl py-2 px-5 mx-2"
                >
                    {question}
                </h1>
            </div>
            <p className={openAnswer 
                ? "w-full text-balance text-center mb-5 px-5 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-tighter leading-tight"
                : "hidden"
            }>
                {answer}
            </p>
        </section>
    )
}
