import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";



export default function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const content = <>
                <div className="absolute xl:hidden right-0 mt-6 mr-[20px]">
                    <ul className="flex flex-col items-center
                    bg-dark-scale-300 p-2 rounded-lg gap-1">
                        <a href="#about" className="w-full"><li className="w-full p-2 hover:bg-brand-color hover:rounded-lg hover:text-dark-scale-100">Sobre mim</li></a>
                        <a href="#projects" className="w-full"><li className="w-full p-2 hover:bg-brand-color hover:rounded-lg hover:text-dark-scale-100">Projetos</li></a>
                        <a href="#services" className="w-full"><li className="w-full p-2 hover:bg-brand-color hover:rounded-lg hover:text-dark-scale-100">Serviços</li></a>
                        <a href="#skills" className="w-full"><li className="w-full p-2 hover:bg-brand-color hover:rounded-lg hover:text-dark-scale-100">Skills</li></a>
                    </ul>
                </div>
</>

    const options = document.getElementById("options")

    function menu() {
        options.classList.toggle("hidden")
    }

    return (
        <header id="header">
            <nav>
                <div className="flex flex-1 items-center justify-between xl:justify-between h-[80px] mx-[20px] xl:mx-0">
                    <img src="./logo.svg" alt="<wic/dev>"/>

                    <div className="hidden xl:flex h-full">
                        <ul className="flex items-center justify-between w-[469px]">
                            <a href="#about"> <li className="hover:border-b-2 hover:rounded hover:text-brand-color hover:border-brand-color hover:pb-[0.5px]
                            transition"><a href="#about">Sobre mim</a></li></a>
                            <a href="#projects"><li className="hover:border-b-2 hover:rounded hover:text-brand-color hover:border-brand-color hover:pb-[0.5px]
                            transition">Projetos</li></a>
                            <a href="#services"><li className="hover:border-b-2 hover:rounded hover:text-brand-color hover:border-brand-color hover:pb-[0.5px]
                            transition">Serviços</li></a>
                            <a href="#skills"><li className="hover:border-b-2 hover:rounded hover:text-brand-color hover:border-brand-color hover:pb-[0.5px]
                            transition">Skills</li></a>
                        </ul>
                    </div>

                    <div className="xl:hidden">
                        {click && content}
                    </div>

                    <div className="xl:hidden">
                        {/* <button onClick={menu} type="button" className="inline-flex focus:bg-dark-scale-300 rounded-lg focus:border focus:border-dark-scale-400 p-1">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none"  viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 18h16"></path>
                            </svg>
                        </button> */}
                        
                        <button onClick={handleClick} className="">
                            {click ? <TfiClose className="h-6 w-6" /> : <CiMenuFries className="h-[26px] w-[26px]" />}
                        </button>
                    </div>
                </div>


                {/* <div id="options" className="relative hidden xl:hidden">
                    <ul className="absolute right-0 
                    flex flex-col items-center
                    bg-dark-scale-300 p-2 rounded-lg mr-[20px] gap-1">
                        <li className="w-full p-1"><a href="#about">Sobre mim</a></li>
                        <li className="w-full p-1"><a href="#projects">Projetos</a></li>
                        <li className="w-full p-1"><a href="#services">Serviços</a></li>
                        <li className="w-full p-1"><a href="#skills">Skills</a></li>
                    </ul>
                </div> */}
            </nav>
        </header>
    );
}