export default function SectionCards(props) {
    return (
        <div className="flex flex-col w-[319px] h-[326px]">
            <img src={props.imageUrl} alt={props.alt} />
            <div className="flex flex-col gap-[12px]">
                <span className="font-archivo font-medium text-base">{props.modelo}</span>
                <span className="font-archivo font-medium text-base text-brand-color">{props.marca}</span>
            </div>
            <span className="font-archivo font-medium text-xl">R$ {props.preco}</span>
        </div>
    )
}