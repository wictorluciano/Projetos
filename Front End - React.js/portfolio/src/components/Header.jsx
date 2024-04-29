export default function Header() {

    const options = document.getElementById("options")

    function menu() {
        options.classList.toggle("hidden")
    }


    return (
        <header id="header">
            <nav>
                <div className="flex flex-1 items-center justify-between xl:justify-between h-[60px] mx-[20px] md:mx-0">
                    <img src="./logo.svg" alt="<wic/dev>"/>

                    <div className="hidden xl:flex h-full">
                        <ul className="flex items-center justify-between w-[469px]">
                            <li className="hover:border-b-2 hover:border-brand-color hover:pb-1 
                            transition ease-in-out delay-150 duration-150"><a href="#about">Sobre mim</a></li>
                            <li className="hover:border-b-2 hover:border-brand-color hover:pb-1 
                            transition ease-in-out delay-150 duration-150"><a href="#projects">Projetos</a></li>
                            <li className="hover:border-b-2 hover:border-brand-color hover:pb-1 
                            transition ease-in-out delay-150 duration-150"><a href="#services">Serviços</a></li>
                            <li className="hover:border-b-2 hover:border-brand-color hover:pb-1 
                            transition ease-in-out delay-150 duration-150"><a href="#skills">Skills</a></li>
                        </ul>
                    </div>

                    <div className="xl:hidden">
                        <button onClick={menu} type="button" className="inline-flex focus:bg-dark-scale-300 rounded-lg focus:border focus:border-dark-scale-400 p-1">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none"  viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div id="options" className="relative hidden xl:hidden">
                    <ul className="absolute right-0 
                    flex flex-col items-center
                    bg-dark-scale-300 p-2 rounded-lg mr-[20px] gap-1">
                        <li className="w-full p-1"><a href="#about">Sobre mim</a></li>
                        <li className="w-full p-1"><a href="#projects">Projetos</a></li>
                        <li className="w-full p-1"><a href="#services">Serviços</a></li>
                        <li className="w-full p-1"><a href="#skills">Skills</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}