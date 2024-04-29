import AboutItens from "./AboutItens";

const contatos = [
    {
        key:'1',
        svgUrl:'./icon-github.svg',
        svgAlt:'icon github',
        titulo:'Github',
        url:'https://github.com/wictorluciano'
    },
    {
        key:'2',
        svgUrl:'./icon-email.svg',
        svgAlt:'icon email',
        titulo:'E-mail',
        url:'mailto:wluciano01@gmail.com'
    },
    {
        key:'3',
        svgUrl:'./icon-instagram.svg',
        svgAlt:'icon instagram',
        titulo:'Instagram',
        url:'https://www.instagram.com/wictor_luciano/'
    },
    {
        key:'4',
        svgUrl:'./icon-linkedin.svg',
        svgAlt:'icon linkedin',
        titulo:'LinkedIn',
        url: 'https://www.linkedin.com/in/wictorluciano/'
    },
]

export default function About(props) {
    return (
        <section id="about" className="flex flex-col items-center gap-14 xl:gap-20">
            <div className="flex flex-col items-center gap-4">
                <p className="font-bold text-2xl xl:text-4xl">Sobre mim</p>
                <span className="flex items-center text-dark-scale-400 xl:text-lg text-sm w-[312px] xl:w-[745px] text-center">Desenvolvedor de software apaixonado por resolver problemas e em constante busca pelo próximo desafio tecnológico.</span>
            </div>

            <div className="xl:flex grid grid-cols-2 gap-16 xl:gap-48">
                {contatos.map(function (item) {
                    return (
                        <AboutItens
                            key={item.key}
                            svgUrl={item.svgUrl}
                            svgAlt={item.svgAlt}
                            url={item.url}
                            titulo={item.titulo}
                        />
                    );
                })}
            </div>
        </section>
    )
}