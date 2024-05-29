import Responsive from "./Responsive";

export default function About() {
    return (
        <section>
            <Responsive>
                <div className="flex flex-col gap-6 mx-10 my-10 md:w-[500px] xl:w-[800px]">
                    <h1 className="font-semibold text-2xl md:text-3xl xl:text-[32px]">Sobre mim</h1>
                    <div className="flex flex-col items-center gap-4 bg-scale-300 shadow-md rounded-md  py-10 px-10">
                        <h2 className="block font-semibold text-center text-xl md:text-2xl xl:text-3xl">Wictor Luciano</h2>
                        <h3 className="block w-full pb-4 border-b border-scale-100 text-center text-sm md:text-xl">23 anos, Dev Full Stack, Rio de Janeiro</h3>
                        <p className="text-sm md:text-xl">Olá, tudo bem? Sou o Wictor e participo do Front End - Fusion, quero poder contribuir com meu conhecimento, tenho experiência como desenvolvimento e gerenciamento de projetos, atuei como estagiário no Sesc e apoie o desenvolvimento Full Stack, realizei a prototipação de telas no Figma, criação e manutenção do sistema, utilizando as tecnologias C#, HTML, CSS, Javascript e Bootstrap e integração com APIs e banco de dados.</p>
                        <p className="text-sm md:text-xl">Atualmente estudo React.js, Tailwind CSS para ampliar meus conhecimentos com front e quero aprender ainda mais colocando em pratica nos projetos.</p>
                    </div>
                </div>
            </Responsive>
        </section>
    )
}