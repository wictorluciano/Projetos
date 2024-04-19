import Image from "next/image"
import Codelandia from "../../public/codelandia.svg"
import IconSearch from "../../public/icon-search.svg"

export function Header() {
    return (
        <header className="flex flex-col items-center justify-center bg-dark-20 w-full mx-auto h-[209px] gap-[32px]">
            <Image 
                src={Codelandia}
                alt="Logo Codelandia"
            />

            <div className="bg-dark-30 border-2 rounded-lg border-dark-40 flex items-center h-[50px] w-[327px] md:w-[704px] xl:w-[1216px]">
                <Image 
                    src={IconSearch}
                    alt="icon Search"
                    className=" ml-[24px] mr-[12px] my-[16px]"
                />
                <input 
                    placeholder="Pesquisar no blog"
                    className="bg-transparent w-full focus:outline-none font-[500] font-inter text-dark-50 text-sm" />
            </div>
        </header>
    )
}