export default function ProjectsItens(props) {
    return (
        <div className="flex flex-col bg-dark-scale-200 rounded-lg border-[0.78px] w-[311px] border-dark-scale-300 p-5 gap-2
        xl:w-[350px] xl:h-[240px]">
            <div className="w-full h-[100px] xl:h-[130px]">
                <a target="_blank" rel="noreferrer" href={props.url} className="w-auto">
                    <img 
                        src={props.imgUrl} 
                        alt={props.imgAlt}
                        className="w-auto h-full mx-auto 
                        border-[0.78px] border-dark-scale-300 rounded-lg" />
                </a>
            </div>
            <div className="flex justify-between">
                <p className="font-medium text-sm" >{props.projeto}</p>
                <a target="_blank" rel="noreferrer" href={props.url}>
                    <img src="./icon-link.svg" alt="icon-link" className="transition ease-in-out delay-150 duration-150 hover:scale-110"/>
                </a>
            </div>
            <span className="font-normal text-xs text-dark-scale-400">Tecnologias: {props.tecnologias}</span>
        </div>
    )
}