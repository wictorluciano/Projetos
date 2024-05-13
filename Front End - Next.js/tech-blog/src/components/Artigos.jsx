import Image from "next/image";


export default function Artigos(props) {
  return (
    <div className="flex flex-col">
        <Image 
            src={props.imgUrl}
            alt={props.imgAlt}

        />
        <div className="flex flex-col gap-3 mx-4 my-6">
            <h1 className="font-semibold text-lg">{props.titulo}</h1>
            <p className="text-sm">{props.descricao}</p>
        </div>
    </div>
  );
}
