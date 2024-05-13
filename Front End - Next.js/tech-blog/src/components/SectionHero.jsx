import Image from "next/image";
import ImgHero from "@/../public/imgHero.svg";
import Responsividade from "./Responsividade";

export default function SectionHero() {
    return (
        <section>
            <Responsividade>
                <div className="flex flex-col items-center">
                    <Image 
                        src={ImgHero}
                        alt="ilustração"
                        className="w-[207px] md:w-[330px] lg:-[400px]"
                    />
                    <div>
                        <h1 className="font-semibold text-2xl text-center">Encontre os melhores artigos de programação em um só lugar</h1>
                        <p className="text-base text-center">Explore o topo da programação em um só lugar! Seu destino único para dicas e tendências atuais.</p>
                    </div>
                    <a href="" className="w-full">
                        <button className="w-full sm:w-[214px] px-8 py-3 bg-purple-500">Buscar artigos</button>
                    </a>
                </div>
            </Responsividade>
        </section>
    );
}