import Image from "next/image"
import IconHeart from "../../public/icon-heart.svg"

export function SectionCards(props) {
    return (
        <div className="flex flex-col gap-[20px] bg-dark-20 
        w-[327px] md:w-[704px] xl:w-[1216px] mx-auto h-auto 
        border-2 rounded-lg border-dark-40 hover:border-2 hover:border-brand-color active:border-2 active:border-brand-color focus:border-2 focus:border-brand-color px-[24px] py-[32px]">
            <div className="flex justify-between">   
                <span className="text-brand-color text-xs font-[500] font-inter">{props.data}</span>
                <Image 
                    src={IconHeart}
                    alt="Icon heart"
                    className="hover:fill-black"
                />
            </div>
            <div className="flex flex-col gap-[16px]">   
                <h1 className="text-white text-xl font-[500] font-space_grotesk">{props.titulo}</h1>
                <p className="text-dark-50 text-sm font-[500] font-inter ">{props.descricao}</p>
            </div>
        </div>
    )
}