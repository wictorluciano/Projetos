import SkillsItens from "./SkillsItens"

const habilidades = [
    {
        key:'1',
        svgUrl:'./icon-html.svg',
        svgAlt:'icon-html'
    },
    {
        key:'2',
        svgUrl:'./icon-css.svg',
        svgAlt:'icon-css'
    },
    {
        key:'3',
        svgUrl:'./icon-javascript.svg',
        svgAlt:'icon-javascript'
    },
    {
        key:'4',
        svgUrl:'./icon-tailwindcss.svg',
        svgAlt:'icon-tailwindcss'
    },
    {
        key:'5',
        svgUrl:'./icon-react.svg',
        svgAlt:'icon-react'
    },
    {
        key:'6',
        svgUrl:'./icon-next.svg',
        svgAlt:'icon-next'
    },
]

export default function Skills(props) {
    return (
        <section id="skills" className="flex flex-col items-center gap-8">
            <div className="flex items-center">
                <p className="font-bold text-2xl xl:text-4xl">Minhas skills</p>
            </div>

            <div className="xl:flex xl:justify-between grid grid-cols-3 place-content-center w-[311px] xl:w-full gap-6">
                {habilidades.map(function (item) {
                    return(
                        <SkillsItens 
                            key={item.key}
                            svgUrl={item.svgUrl}
                            svgAlt={item.svgAlt}
                        />
                    )
                })}
            </div>
        </section>
    )
}