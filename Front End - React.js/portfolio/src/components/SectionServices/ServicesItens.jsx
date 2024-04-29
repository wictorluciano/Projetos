export default function ServicesItens(props) {
    return (
        <div className="flex flex-col items-center justify-center 
        w-[311px]
        xl:items-start xl:w-[350px] xl:h-[240px] xl:gap-10 
        bg-dark-scale-200 rounded-lg
        border-b-2 rounded-b-lg border-brand-color p-9 gap-2">
            <div className="w-10 h-10 max-w-14 max-h-14 
            transition ease-in-out delay-150 duration-150 hover:scale-110">
                <img 
                    src={props.imgUrl} 
                    alt={props.imgAlt} 
                    />    
            </div>
            <p className="font-medium text-sm text-dark-scale-400 xl:text-3xl" >{props.titulo}</p>
        </div>
    )
}