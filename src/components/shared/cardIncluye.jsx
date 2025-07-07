
export const CardIncluye = ({ description }) => {
    return (
        <div className="flex flex-row items-center justify-center gap-4 bg-lime-200 overflow-hidden rounded-4xl">
            <div className="bg-white/90 w-16 h-16 lg:w-20 lg:h-20 rounded-bl-3xl rounded-t-3xl flex items-center justify-center">
                    <svg  
                    xmlns="http://www.w3.org/2000/svg"  
                    width="40"  
                    height="40"  
                    viewBox="0 0 24 24"  
                    fill="none"  
                    stroke="#ec4899"  
                    strokeWidth="2"  
                    strokeLinecap="round"  
                    strokeLinejoin="round"  
                    className="icon icon-tabler icons-tabler-outline icon-tabler-check">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 12l5 5l10 -10" />
                    </svg>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl tracking-tighter leading-tight pr-4 w-45 font-bold">
                {description}
            </p>
        </div>
    )
}
