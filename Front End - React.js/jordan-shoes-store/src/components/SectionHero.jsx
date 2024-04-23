
export default function SectionHero() {
    return (
        <section className="flex items-center h-[400px] max-w-[1500px] mx-auto bg-img_bg_hero bg-cover bg-no-repeat bg-center md:bg-top lg:bg-top">
            <div className="flex items-center justify-center w-full h-full bg-bg-color">
                    <div className="flex flex-col items-start justify-center w-[319px] md:w-[678px] xl:w-[1037px] gap-[40px]">
                        <div className="flex gap-[8px]">
                            <img src="/logo.svg" alt="Logo Jordan Shoes" />
                            <span className="text-white font-archivo font-medium text-lg md:text-lg lg:text-2xl">JordanShoes</span>
                        </div>
                        <div className="flex flex-col gap-[12px] text-white">
                            <span className="text-2xl font-archivo font-medium md:text-2xl lg:text-[32px]">A melhor loja de Jordan</span>
                            <p className="text-base font-archivo font-normal w-[328px] md:w-[350px] md:text-lg lg:text-2xl">O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
                        </div>
                    </div>
            </div>
        </section>
    )
}