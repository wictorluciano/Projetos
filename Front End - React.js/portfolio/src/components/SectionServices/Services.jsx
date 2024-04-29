import ServicesItens from './ServicesItens'

const servicos = [
    {
        key:'1', 
        imgUrl:'./icon-code.svg',
        imgAlt:'icon-code',
        titulo:'Criação de sites'
    },
    {
        key:'2', 
        imgUrl:'./icon-figma.svg',
        imgAlt:'icon-figma',
        titulo:'UI Designer'
    },
    {
        key:'3', 
        imgUrl:'./icon-smartphone.svg',
        imgAlt:'icon-smartphone',
        titulo:'Sites responsivos'
    },
]

export default function Services(props) {
    return(
        <section id="services" className="flex flex-col items-center gap-8">
            <div className="flex items-center">
                <p className="font-bold text-2xl xl:text-4xl">Serviços</p>
            </div>

            <div className="xl:flex xl:justify-between grid grid-cols-1 place-content-center w-[311px] xl:w-full gap-6">
                {servicos.map(function (item) {
                    return (
                        <ServicesItens
                            key={item.key}
                            imgUrl={item.imgUrl}
                            imgAlt={item.imgAlt}
                            titulo={item.titulo}
                        />
                    );
                })}
            </div>
        </section>
    )
}