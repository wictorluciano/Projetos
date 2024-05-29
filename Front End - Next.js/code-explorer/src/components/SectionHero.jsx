import Link from "next/link";
import Image from "next/image";
import Responsive from "./Responsive";
import WictorHero from "../assets/wictor-hero.svg"

export default function SectionHero() {
    return (
        <section className="bg-scale-300">
            <Responsive>
                <div className="flex flex-col items-center py-8 gap-6
                md:w-[550px] xl:w-full xl:justify-between xl:flex-row-reverse">
                    <Image 
                        src={WictorHero}
                        alt="Wictor"
                        className="w-[240px] h-[220px] xl:w-[400px] xl:h-[350px]"
                    />
                    <div className="flex flex-col items-center gap-4 xl:w-[692px] xl:items-start xl:gap-9">

                        <h1 className="font-semibold text-2xl text-center md:text-[32px] xl:text-[40px] xl:text-start">WICTOR LUCIANO</h1>

                        <h2 className="text-center md:text-xl xl:text-2xl xl:text-start">Desenvolvedor de software apaixonado por resolver problemas e em constante busca pelo próximo desafio tecnológico. </h2>

                        <Link href="/About" className="w-full h-[45px]
                        md:w-[332px] xl:w-[275px]">
                            <button className="w-full h-full rounded-md bg-brand-color text-white font-bold text-sm
                            hover:border hover:border-brand-color hover:bg-scale-100 hover:text-brand-color hover:shadow-md hover:shadow-scale-200
                            transition ease-in-out delay-150 duration-150">SOBRE MIM</button>
                        </Link>
                        
                    </div>
                </div>
            </Responsive>
        </section>
    )
}