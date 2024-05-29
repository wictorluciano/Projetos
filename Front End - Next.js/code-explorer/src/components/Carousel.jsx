'use client'

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react"

export default function Carousel({children : images}){
    //botoes carousel
    const [curr, setCurr] = useState(0)
    const prev = () => 
        setCurr((curr => curr === 0 ? images.length - 1 : curr -1))
    const next = () => 
        setCurr((curr => curr === images.length - 1 ? 0 : curr +1))

    //ampliar carousel
    const [modal, setModal] = useState(false)
    const click = () => 
        setModal(!modal)

    return(
        <div className={`${modal? "transition ease-in-out delay-150 duration-500 lg:scale-125 md:scale-105 scale-105 lg:my-10" : "transition-none"} relative cursor-pointer`}>
            <div onClick={click} className="overflow-hidden rounded-lg">
                <div className="flex max-w-[600px] h-[400px] transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{images}</div>
            </div>
            <div onClick={click} className={`${modal? "absolute" : "hidden"} top-0  right-0 flex items-center justify-between p-4`}>
                <button className="rounded-full shadow bg-white/70 px-2 text-black/80 hover:bg-white hover:text-black">x</button>
            </div>
            <div className="absolute w-full bottom-0 flex items-center justify-between p-4">
                <button onClick={prev} className="rounded-full shadow bg-white/70 p-1 text-black/80 hover:bg-white hover:text-black"><FiChevronLeft /></button>
                <button onClick={next} className="rounded-full shadow bg-white/70 p-1 text-black/80 hover:bg-white hover:text-black"><FiChevronRight /></button>
            </div>
        </div>
    )
}


