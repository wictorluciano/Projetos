export default function AboutItens(props) {
    return (
        <div className="flex flex-col items-center gap-3 ">
            <a target="_blank" rel="noreferrer" href={props.url}>
                <div className="flex items-center  
                w-[45px] h-[45px] xl:w-[62px] xl:h-[62px]
                bg-dark-scale-200 hover:bg-dark-scale-300 rounded-full p-2 
                transition ease-in-out delay-150 duration-150 hover:scale-110">
                    <img 
                        src={props.svgUrl} 
                        alt={props.svgAlt}
                        className="mx-auto" />
                </div>
            </a>
            <p className="font-semibold text-sm xl:text-lg tracking-wider">{props.titulo}</p>
        </div>

    )
}