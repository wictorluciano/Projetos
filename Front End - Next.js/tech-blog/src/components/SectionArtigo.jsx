import React from "react";
import { promises as fs } from 'fs';
import Responsividade from "./Responsividade";
import Artigos from "./Artigos";


export default async function SectionArtigo() {
    //Ler o arq Json na pasta api
    const file = await fs.readFile(process.cwd() + '/src/api/artigos.json', 'utf8');
    const artigos = JSON.parse(file);

    return (
        <section>
            <Responsividade>
                <div>Artigos</div>
                <div className="flex flex-col">
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