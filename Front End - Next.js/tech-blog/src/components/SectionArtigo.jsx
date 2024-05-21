import React from "react";
import { promises as fs } from 'fs';
import Responsividade from "./Responsividade";
import Artigos from "./Artigos";


export default async function SectionArtigo() {
    //Ler o arquivo em Json na pasta /api
    const file = await fs.readFile(process.cwd() + '/src/api/artigos.json', 'utf8');
    const artigos = JSON.parse(file);

    return (
        <section className="mb-9">
            <Responsividade>
                <h1 className="font-semibold text-2xl mb-[40px]">Artigos recomendados</h1>
                <div className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:w-full">
                    {artigos.map((artigo) => (
                        <Artigos
                            key={artigo.id}
                            imgUrl={artigo.imgUrl}
                            imgAlt={artigo.imgAlt}
                            titulo={artigo.titulo}
                            descricao={artigo.descricao}
                        />
                    ))}
                </div>
            </Responsividade>
        </section>
    );
}