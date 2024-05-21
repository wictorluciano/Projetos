import Image from "next/image";

export default function Artigos(props) {
  return (
    <div className="flex flex-col items-center rounded-lg border-2 border-[#EEEEFF] lg:w-[300px] xl:w-[380px]">
        <Image 
            src={props.imgUrl}
            alt={props.imgAlt}
            width={327}
            height={327}
        />
        <div className="flex flex-col gap-3 mx-4 my-6">
            <h1 className="font-semibold text-lg">{props.titulo}</h1>
            <p className="text-sm">{props.descricao}</p>
        </div>
    </div>
  );
}
