export default function Section(props) {
    console.log(props)
    return (
        <section className="flex items-center max-w-[1280px] my-[60px] mx-auto">
            <div className="flex flex-col items-center mx-auto gap-[40px]">
                <div className="flex flex-col items-center justify-center mx-auto gap-[12px] lg:gap-[24px]">
                    <span className="font-archivo font-semibold text-xl md:text-2xl lg:text-[32px]">
                        Os melhores em só lugar
                    </span>
                    <p className="w-[319px] h-[94px] md:w-[520px] lg:w-[593px] font-normal font-archivo text-sm md:text-base lg:text-2xl">
                        A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.
                    </p>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-[40px]">
                    {props.children}
                </div>
            </div>
        </section>
    )
}