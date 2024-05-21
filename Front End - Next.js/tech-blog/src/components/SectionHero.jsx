import Image from "next/image";
import ImgHero from "@/../public/imgHero.svg";
import Responsividade from "./Responsividade";

export default function SectionHero() {
    return (
        <section>
            <Responsividade>
                <div className="flex flex-col items-center gap-6 my-[64px] lg:flex-row-reverse lg:justify-between lg:w-full">
                    <Image 
                        src={ImgHero}
                        alt="ilustração"
                        className="w-[207px] md:w-[330px] lg:-[400px]"
                    />
                    <div className="flex flex-col items-center gap-6 lg:w-[451px] lg:justify-start lg:items-start">
                        <h1 className="font-semibold text-2xl text-center lg:text-start">Encontre os melhores artigos de programação em um só lugar</h1>
                        <p className="text-base text-center lg:text-start">Explore o topo da programação em um só lugar! Seu destino único para dicas e tendências atuais.</p>
                        <a href="" className="w-full">
                            <button className="w-full sm:w-[214px] px-8 py-3 bg-[#846AFF] rounded-lg font-bold text-sm text-white">Buscar artigos</button>
                        </a>
                    </div>
                </div>
            </Responsividade>
        </section>
    );
}