import ProjectsItens from "./ProjectsItens";

const projetos = [
    {
        key:'1', 
        url:'https://github.com/wictorluciano/Projetos/tree/main/Front%20End%20-%20React.js/jordan-shoes-store',
        imgUrl:'./assets/jordan-shoes.png',
        imgAlt:'jordan-shoes',
        projeto:'jordan-shoes-store',
        tecnologias:'react.js, tailwind css e html'
    },
    {
        key:'2', 
        url:'https://github.com/wictorluciano/Projetos/tree/main/Front%20End%20-%20React.js/linktree-gamer',
        imgUrl:'./assets/linktree-gamer.png',
        imgAlt:'linktree-gamer',
        projeto:'linktree-gamer',
        tecnologias:'react.js, tailwindcss e html'
    },
    {
        key:'3', 
        url:'https://github.com/wictorluciano/Projetos/tree/main/Front%20End%20-%20Next.js/landing-page-itau',
        imgUrl:'./assets/landingpage-itau.png',
        imgAlt:'landing page itau',
        projeto:'landing-page-itau',
        tecnologias:'next.js e tailwindcss'
    },
]

export default function Projects(props) {
    return(
        <section id="projects" className="flex flex-col items-center gap-8">
            <div className="flex items-center">
                <p className="font-bold text-2xl xl:text-4xl">Projetos</p>
            </div>

            <div className="xl:flex xl:flex-wrap xl:justify-between grid grid-cols-1 place-content-center w-[311px] xl:w-full gap-6">
                {projetos.map(function (item) {
                    return (
                        <ProjectsItens
                            key={item.key}
                            url={item.url}
                            imgUrl={item.imgUrl}
                            imgAlt={item.imgAlt}
                            projeto={item.projeto}
                            tecnologias={item.tecnologias}
                        />
                    );
                })}
            </div>
        </section>
    )
}