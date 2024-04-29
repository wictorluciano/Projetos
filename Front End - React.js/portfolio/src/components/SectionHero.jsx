export default function SectionHero() {
    return (
        <section className="grid grid-cols-1 justify-items-center xl:flex xl:justify-between gap-10">
            <div className="flex flex-col items-center justify-center max-w-[337px] xl:items-start gap-2">
                <p className="font-bold text-2xl xl:text-4xl">Olá, eu sou o Wictor :)</p>
                <span className="text-dark-scale-400 xl:text-lg">Desenvolvedor Front-End 
& UI Designer</span>
                <a href="mailto:wluciano01@gmail.com">
                    <button className="bg-brand-color rounded-lg font-medium text-xs text-dark-scale-100 py-2 px-7 mt-6 xl:text-base   
                    transition ease-in-out delay-150 duration-150 hover:scale-110">Entrar em contato</button>
                </a>
            </div>
            <div className="flex items-center w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] 
            bg-hero-pattern bg-center bg-no-repeat bg-contain rounded-full
            animate-pulse">
            </div>
        </section>
    )
}