import Image from "next/image";
import { Container } from "./Container";
import { ItemSection } from "./ItemSection";
import Phone from "@/assets/phone.png"

export function SectionService() {
    return (
        <section className="relative w-full h-[965px] ">
            <Container>
                <div className="flex-1 max-w-[594px] pt-32">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9">Serviços exclusivos</span>
                    <h2 className="text-primary-gray text-[56px] font-bold leading-none mb-6">Gerencie suas finanças sem sair de casa</h2>
                    <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como você pode cuidar das saus finanças pelo app Itaú de forma segura, rápido e o melhor, no conforto da sua casa.</p>
                    <ItemSection />
                </div>
            </Container>
            <div className="absolute top-0 right-0 flex items-center w-[32%] h-full bg-gray-phone">
                <Image 
                    src={Phone}
                    alt="Phone"
                    className="translate-x-[-50%]"
                />
            </div>
        </section>
    )
}