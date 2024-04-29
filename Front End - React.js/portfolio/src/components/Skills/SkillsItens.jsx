export default function(props) {
    return(
        <div className="flex items-center 
        w-[90px] h-[90px] xl:w-[150px] xl:h-[150px] 
        bg-dark-scale-200 rounded-lg 
        border-[0.78px] border-dark-scale-300">
            <img 
                src={props.svgUrl} 
                alt={props.svgAlt}
                className="mx-auto transition ease-in-out delay-150 duration-150 hover:scale-110" />
        </div>
    )
}